import React from 'react'

type Props = {
    type?: "button" | "submit",
    onclick?: () => void,
    disabled?: boolean;
    text?: string;
}

export const Button = ({ type="button", onclick, disabled, text}: Props) => {
  return (
    <button type= {type} onClick={onclick} disabled={disabled} 
        className="w-full font-medium text-[16px] rounded-lg  py-3 transition bg-primary-500 text-neutral-light hover:bg-neutral-light hover:border-primary-500 border-2 hover:text-primary-500"        
    >
      {disabled ? "Creating..." : text }
    </button>
  )
}
