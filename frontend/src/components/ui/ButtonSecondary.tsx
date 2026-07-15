import React from 'react'
import { MoveLeft } from 'lucide-react';

type Props = {
    // children: React.ReactNode,
    type: "button",
    onclick: () => void
}
export const ButtonSecondary = ({type="button", onclick}: Props) => {
  return (
    <button onClick={onclick} className='flex items-center justify-center gap-2 rounded-lg border border-primary-500 py-3 px-6 text-[16px] font-medium text-primary-500 hover:border-2' >
        <MoveLeft className='text-primary-500'/>
        <span>Back</span>
    </button>
  )
}
