"use client"
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { RegisterFormdata } from '@/lib/schemas'
import FormInput from '@/components/form/FormInput'
import { Button } from '@/components/ui/Button'

const AccountStep = ({next} : {next:() => Promise<void>}) => {
   
  return (
    <div className='space-y-5'>
        <FormInput name="email" label="Email" placeholder ="gloria@gmail.com"/>
        <FormInput name="password" label="Password" placeholder ="123456" type='password'/>        
        <FormInput name="confirmPassword" label="confirm password" placeholder ="123456" type='password'/>        
        
        <Button onclick={next} />
       
        
    </div>
  )
}

export default AccountStep