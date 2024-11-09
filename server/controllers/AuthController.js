import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const maxAge = 3 * 24 * 60 * 60; // in seconds
const createToken = (email, userId) => {
  return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
};

export default {
  signup_post: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).send("Email and Password are required");
      }

      const user = await User.create({ email, password });
      const token = createToken(email, user.id);

      res.cookie("jwt", token, {
        maxAge: maxAge * 1000, // convert to milliseconds for cookie expiry
        httpOnly: true,
        secure: true,
        sameSite: "None",
      });

      return res.status(201).json({
        user: {
          id: user.id,
          email: user.email,
          profileSetup: user.profileSetup,
        },
      });
    } catch (error) {
      console.error({ error });
      return res.status(500).send("Internal Server Error");
    }
  },
};
