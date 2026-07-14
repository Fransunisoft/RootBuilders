"use client"
import React from 'react'
import FormInput from '@/components/form/FormInput';
import { Button } from '@/components/ui/Button';
import { ButtonSecondary } from '@/components/ui/ButtonSecondary';


const PersonalStep = ({next, back} : {next:() => void, back:() => void}) => {
    return (
    <div className='space-y-5'>
        <div className='flex gap-4'>
            <div className='flex-1'>
                <FormInput name='firstName' label='first name' placeholder='Gloria'/>
            </div>
            <div className='flex-1'>
                <FormInput name='lastName' label='last name' placeholder='Anefu'/>
            </div>
        </div>
        <FormInput name='phone' label='phone number' placeholder='081000000'/>
        <FormInput name='country' label='country of origin' placeholder='Nigeria'/>
        
        <div className='flex w-full gap-4'>
            <ButtonSecondary type='button' onclick={back} />  
            <Button onclick={next} />
        </div>
    </div>
  )
}

export default PersonalStep