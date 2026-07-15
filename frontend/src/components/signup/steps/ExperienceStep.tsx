"use client"
import React from 'react'
import { MoveLeft } from 'lucide-react'
import FormInput from '@/components/form/FormInput'
import { Button } from '@/components/ui/Button'
import { ButtonSecondary } from '@/components/ui/ButtonSecondary'
import { FormSelect } from '@/components/form/FormSelect'

const ExperienceStep = ({back} : {back:() => void}) => {
  return (
    <div className="space-y-5">  
      <FormSelect
        name='cohort'
        label='cohort'
        options={[
          {
            label: 'Cohort 1',
            value: 'cohort 1'
          },
          {
            label: 'Cohort 2',
            value: 'cohort 2'
          },
          {
            label: 'Cohort 3',
            value: 'cohort 3'
          }
        ]}/>
          <FormSelect
        name='track'
        label='track'
        options={[
          {
            label: 'UI/UX',
            value: 'ui/ux'
          },
          {
            label: 'FrontEnd development',
            value: 'frontend'
          },
          {
            label: 'BackEnd development',
            value: 'backend'
          }
        ]}/>
          <FormSelect
        name='skill'
        label='skill level'
        options={[
          {
            label: 'Ixperienced',
            value: 'experienced'
          },
          {
            label: 'Intermediate',
            value: 'intermediate'
          },
          {
            label: 'Beginner',
            value: 'beginner'
          }
        ]}/>
          <FormSelect
        name='media'
        label='how did you hear about rootbuilders?'
        options={[
          {
            label: 'Linkedin',
            value: 'linkedin'
          },
          {
            label: 'Telegram',
            value: 'telegram'
          },
          {
            label: 'Twitter',
            value: 'twitter'
          }
        ]}/>
        <div className='flex w-full gap-4'>
            <ButtonSecondary type='button' onclick={back} />  
            <Button type='submit' />
        </div>
    </div>
  )
}

export default ExperienceStep