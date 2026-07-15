"use client"
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import type { RegisterFormdata } from '@/lib/schemas'

import {EyeOff, Eye} from 'lucide-react'

type Props = {
    name: keyof RegisterFormdata;
    label: string;
    placeholder?: string;
    type?: string;
}
export default function FormInput ({name, label, placeholder, type} : Props) {
    const {register, formState: {errors}} = useFormContext<RegisterFormdata>()
    const [showPassword, setShowPassword] = useState(false)
    const error = errors[name]
    const inputType = type === "password" && showPassword ? "text" : type
    return (
    <div className='space-y-2'>
        <label className="text-[11px] block font-bold uppercase tracking-wider">{label}</label>
        <div className="relative">
            <input 
                {...register(name)}
                type={inputType}
                placeholder={placeholder}
                className={`relative w-full rounded-lg px-4 py-3 caption outline-none transition text-neutral-secondary
                    ${error ? "border border-error-500 focus:error-500" : "border border-neutral-border focus:border-primary-500" }`}
            />
            {type === "password" && (
                <button 
                type='button'
                className='absolute right-4 top-1/2 -translate-y-1/2'
                onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            )}
        </div>
        {error?.message && (
            <p className='text-[14px]! text-error-500'>{error.message}</p>
        )}
    </div>
  )
}
