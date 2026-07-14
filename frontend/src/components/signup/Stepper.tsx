import React from 'react'
const steps = [
    "Account info",
    "Personal info",
    "Demographics",
    "Experience",
]

interface Props {
    currentStep: number;
}

const Stepper = ({currentStep}: Props) => {

  return (
    <div className='flex justify-between border-b-[0.5px] border-b-primary-500 mb-12'>
        {steps.map((step, i) => {
          const stepNumber = i + 1
          const isCompleted = currentStep > stepNumber
          const isCurrent = currentStep === stepNumber
          return(
            <div key={step} className={`flex flex-1 flex-col items-center p-4 space-y-2
              ${isCompleted || isCurrent ? "border-b-[0.5px] border-b-primary-500" : "border-b-primary-300"}`}>
              <span className={`border border-neutral-card-border rounded-full px-2 ${
                isCompleted || isCurrent ? "bg-primary-500 border border-primary-500 text-neutral-50" : "bg-none"
              }`}>
                  {isCompleted ? "✓" : stepNumber}
              </span>
              <p className={`${isCompleted || isCurrent ? "text-primary-500" : "text-neutral-secondary"} `}>{step}</p>
            </div>

)
})}
  </div>
  )
}

export default Stepper