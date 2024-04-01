import React from 'react';
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const HomePage = () => {
  return (
    <main className='bg-blue-soo h-screen flex items-center justify-center p-10'> 
      <div className='grid w-full h-full grid-cols-1 bg0white md:grid-cols-2'>
        <div className='bg-gray-500 text-white flex items-center justify-center flex-col'>
          <div className='my-4'>
            <h1 className='text-3xl font-semibold'> Login </h1>
          </div>
          <form>
            <Button className='flex items-center w-full gap-4 px-12 bg-transparent rounded-full' variant='outline'>
             <FcGoogle />
               Sign In to start your session.
            </Button>
            <Label htmlFor='email'> Email* </Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full "
              type="email"
              id="email"
              placeholder="Email"
              
            />
            

            <Label htmlFor='password'> Password* </Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full "
              type="password"
              id="password"
              placeholder="Password"
            />
            
            <Button type='submit' className=' w-full mt-6 rounded-full bg-indigo-500 hover:bg-indigo-700 '>
              Sign in
            </Button>
            
          </form>
          <p className='mt-4 text-xs text-slate-200'>
            @2024 All rights reserved
          </p>
        </div>
        
      </div>
    </main>
  );
};

export default HomePage;