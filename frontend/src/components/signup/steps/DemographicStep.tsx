"use client"
import React, { useState } from 'react'
import FormInput from '@/components/form/FormInput'
import { Button } from '@/components/ui/Button'
import { ButtonSecondary } from '@/components/ui/ButtonSecondary'
import { FormSelect } from '@/components/form/FormSelect'

const DemographicStep = ({next,back} : {next:() => void,  back:() => void}) => {
    
  return (
    <div className='space-y-5'>
        <FormInput name='birthDate' label='date of birth' type='date'/>
        <FormSelect
          name='gender'
          label='Gender'
          options={[
            {
              label: 'Female',
              value: 'female'
            },
            {
              label: 'Male',
              value: 'male'
            }
          ]}/>
        <FormSelect
          name="education"
          label="Education"
          options={[
            {
              label: "High School",
              value: "high-school",
            },
            {
              label: "Bachelor's",
              value: "bachelors",
            },
            {
              label: "Master's",
              value: "masters",
            },
            {
              label: "PhD",
              value: "phd",
            },
          ]}
        />
        <FormSelect
          name="employment"
          label="employment status"
          options={[
            {
              label: "Employed",
              value: "Employed",
            },
            {
              label: "Self Employed",
              value: "self-employed",
            },
            {
              label: "Unemployed",
              value: "unemployed",
            },
         
          ]}
        />
        <div className='flex w-full gap-4'>
            <ButtonSecondary type='button' onclick={back} />  
            <Button onclick={next} />
        </div>
    </div>
  )
}

export default DemographicStep