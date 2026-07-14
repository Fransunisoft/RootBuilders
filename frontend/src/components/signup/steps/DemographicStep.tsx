"use client"
import React from 'react'
import { Form, useFormContext } from 'react-hook-form'
import { MoveLeft } from 'lucide-react'
import FormInput from '@/components/form/FormInput'
import { Button } from '@/components/ui/Button'
import { ButtonSecondary } from '@/components/ui/ButtonSecondary'

const DemographicStep = ({next,back} : {next:() => void,  back:() => void}) => {
    const {register} = useFormContext()
  return (
    <div className='space-y-5'>
        <FormInput name='birthDate' label='date of birth' placeholder='26/01/1976'/>
        <FormInput name='gender' label='gender' placeholder='Female'/>
        <FormInput name='education' label='educational qualification' placeholder="Bachelor's Degree"/>
        <FormInput name='employment' label='employment status' placeholder='Self Employed'/>
        <div className='flex w-full gap-4'>
            <ButtonSecondary type='button' onclick={back} />  
            <Button onclick={next} />
        </div>
    </div>
  )
}

export default DemographicStep