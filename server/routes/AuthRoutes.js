import express from 'express';
import authController from "../controllers/AuthController.js"
const router = express.Router()

router.post('/signup', authController.signup_post)

export default router;