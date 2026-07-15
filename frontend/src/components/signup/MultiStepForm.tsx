"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import {FormProvider, useForm} from "react-hook-form"
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import Stepper from './Stepper'
import AccountStep from './steps/AccountStep'
import PersonalStep from './steps/PersonalStep'
import DemographicStep from './steps/DemographicStep'
import ExperienceStep from './steps/ExperienceStep'

import { registerSchema, type RegisterFormdata } from '@/lib/schemas'
import { registerUser } from '@/lib/api'


export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const methods = useForm<RegisterFormdata>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",

      firstName: "",
      lastName: "",
      phone: "",
      country: "",

      birthDate: "",
      gender: "",
      education: "",
      employment: "",

      cohort: "",
      track: "",
      skill: "",
      media: "",

    },
  })
  const {trigger} = methods;
  const next = async() => {
    let fieldsToValidate:
      (keyof RegisterFormdata)[] = []
    if(step === 1) {
      fieldsToValidate = [
        "email",
        "password",
        "confirmPassword",
      ]
    }

     if(step === 2) {
      fieldsToValidate = [
        "firstName",
        "lastName",
        "phone",
        "country",
      ]
    }

     if(step === 3) {
      fieldsToValidate = [
        "birthDate",
        "gender",
        "education",
        "employment",
      ]
    }

    if(step === 4) {
    fieldsToValidate = [
      "cohort",
      "track",
      "skill",
      "media",
    ]
  }
    const isValid = await trigger(fieldsToValidate)
    if(isValid) {
      setStep(prev => prev + 1)
    }  

  }
    const back = () => {
      setStep(prev => prev - 1)
    }
  

  const submit = async (data:RegisterFormdata) => {
    try{
      setLoading(true)
      const response = await registerUser(data)
      console.log(response)
      router.push("/register-success")
    } finally {
      setLoading(false)
    }
  }
  
  return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submit)}>
            <Stepper currentStep={step} />
            {step===1 && <AccountStep next = {next}/>}
            {step===2 && <PersonalStep next = {next} back = {back}/>}
            {step===3 && <DemographicStep next = {next} back = {back}/>}
            {step===4 && <ExperienceStep  back = {back} loading={loading}/>}
        
          </form>
            
        </FormProvider>
  )
}
