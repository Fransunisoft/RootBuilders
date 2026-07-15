"use client"
import React from 'react'
import FormInput from '@/components/form/FormInput';
import { Button } from '@/components/ui/Button';
import { ButtonSecondary } from '@/components/ui/ButtonSecondary';
import { FormSelect } from '@/components/form/FormSelect';


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
        <FormSelect
                name="country"
                label="country of origin"
                options={[
                {
                    label: "Nigeria",
                    value: "nigeria",
                },
                 {
                    label: "Ethiopia",
                    value: "ethiopia",
                },
                {
                    label: "Rwanda",
                    value: "rwanda",
                },                
                ]}
            />
        
        <div className='flex w-full gap-4'>
            <ButtonSecondary type='button' onclick={back} />  
            <Button onclick={next} text='continue'/>
        </div>
    </div>
  )
}

export default PersonalStep