import React from 'react';
import { Button } from "@/components/ui/button"

const signup = () => {
  return (
    <div className='flex text-center '>
      <p className='text-lg mt-20 mx-5 text-keft'> This is signup page! </p>
      <Button className='text-2xl mt-4 mx-auto font-bold mb-4 text-blue-500 text-center' variant="outline">signup</Button>
      
    </div>
    
  )
}

export default signup;