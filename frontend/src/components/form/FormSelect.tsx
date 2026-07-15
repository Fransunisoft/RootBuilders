import React from 'react'
import type { RegisterFormdata } from '@/lib/schemas';
import { useFormContext } from 'react-hook-form';
import { ChevronDown } from 'lucide-react';
type Option = {
    label: string;
    value: string;
}
type Props = {
    name: keyof RegisterFormdata;
    label: string;
    options: Option[]
}

export const FormSelect = ({name, label, options} : Props) => {
    const {register, formState: {errors}} = useFormContext<RegisterFormdata>()
    const error = errors[name]

    
  return (
     <div className='space-y-2 '>
        <label className="text-[11px] block font-bold uppercase tracking-wider">{label}</label>
        <div className='relative'>
            <select
                {...register(name)}
                className={`relative w-full rounded-lg px-4 pr-10 py-3 caption outline-none transition text-neutral-secondary appearance-none
                        ${error ? "border border-error-500 focus:error-500" : "border border-neutral-border focus:border-primary-500" }`}
            >
                <option value="">Select {label}</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4' />    
        </div>
        {error?.message && (
            <p className='text-sm text-error-500'>{error.message}</p>
        )}
    </div>
  )
}
