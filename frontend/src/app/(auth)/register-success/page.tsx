import React from 'react'
import {Check} from 'lucide-react'
import { Button } from '@/components/ui/Button'
const SuccessPage = () => {
  return (
    <div className='flex flex-col space-y-2 items-center'>
        <Check className='text-success-500 mb-4 bg-success-bg p-2 h-10 w-10 flex items-center justify-center  rounded-full'/>
        <h1>Registration successful!</h1>
        <p className='text-neutral-secondary'>Congratulations! Your account has been successfully created.</p>
        <Button text='Proceed to dashboard'/>
    </div>
  )
}

export default SuccessPage