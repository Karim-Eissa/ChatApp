import { useState } from 'react';
import Background from '@/assets/login2.png';
import Victory from '@/assets/victory.svg';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList } from '@/components/ui/tabs';
import { TabsContent, TabsTrigger } from '@radix-ui/react-tabs';
import { Button } from '@/components/ui/button';
import {toast} from "sonner"
import {apiClient} from "@/lib/api-client"
import {SIGNUP_ROUTE} from "@/utils/constants"
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const validateSignup=()=>{
    if(!email.length){
        toast.error("Email is required")
        return false;
    }
    if(!password.length){
        toast.error("Password is required")
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match")
        return false;
    }
    return true
  }
  const handleLogin=async()=>{

  }
  const handleSignup=async()=>{
    if(validateSignup()){
        const response=await apiClient.post(SIGNUP_ROUTE,{email,password})
        console.log({response})
    }
  }
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] bg-white border-2 border-white text-opacity-90 shadow-2xl rounded-3xl grid xl:grid-cols-2">
        {/* Right Side - Auth Form */}
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="victory emoji" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
              Fill in the details to get started with the best chat app
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <Tabs>
              <TabsList className="flex w-full">
                <TabsTrigger
                  value="login"
                  className="text-black text-opacity-90 border-b-2 rounded-none w-full p-3 transition-all duration-300 focus:outline-none data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 hover:bg-gray-100"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="text-black text-opacity-90 border-b-2 rounded-none w-full p-3 transition-all duration-300 focus:outline-none data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 hover:bg-gray-100"
                >
                  Signup
                </TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                <Input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="rounded-full p-6 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  aria-label="Email"
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="rounded-full p-6 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  aria-label="Password"
                />
                <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>
              </TabsContent>
              <TabsContent className="flex flex-col gap-5 " value="signup">
                <Input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="rounded-full p-6 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  aria-label="Email"
                />
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="rounded-full p-6 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  aria-label="Password"
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className="rounded-full p-6 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  aria-label="Confirm Password"
                />
                <Button className="rounded-full p-6" onClick={handleSignup}>Signup</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className='hidden xl:flex justify-center items-center'>
            <img src={Background} alt='Background' className='h-[700px]'></img>
        </div>
      </div>
    </div>
  );
};

export default Auth;
