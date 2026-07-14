import React from 'react'

type Props = {
    // children: React.ReactNode,
    type?: "button" | "submit",
    onclick?: () => void
}

export const Button = ({ type="button", onclick}: Props) => {
  return (
    <button type= {type} onClick={onclick} 
        className="w-full font-medium text-[16px] rounded-lg  py-3 transition bg-primary-500 text-neutral-light hover:bg-neutral-light hover:border-primary-500 border-2 hover:text-primary-500"        
    >
        Continue
    </button>
  )
}
