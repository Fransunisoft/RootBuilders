"use client"
import React from 'react'
import { MoveLeft } from 'lucide-react'
import FormInput from '@/components/form/FormInput'
import { Button } from '@/components/ui/Button'
import { ButtonSecondary } from '@/components/ui/ButtonSecondary'

const ExperienceStep = ({back} : {back:() => void}) => {
  return (
    <div className="space-y-5">
        <FormInput name='cohort' label='cohort' placeholder='Cohort 1'/>
        <FormInput name='track' label='track' placeholder='UI/UX'/>
        <FormInput name='skill' label='skill level' placeholder='Intermediate'/>
        <FormInput name='media' label='how did you hear about rootbuilders?' placeholder='LinkedIn'/>

        <div className='flex w-full gap-4'>
            <ButtonSecondary type='button' onclick={back} />  
            <Button type='submit' />
        </div>
    </div>
  )
}

export default ExperienceStep