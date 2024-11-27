import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import FormInput from "./FormInput"
import FormLabel from "./FormLabel"

type TFormInputLabel = ComponentProps<"input"> & {
  label: string
  register?: UseFormRegister<any>
  name: string
  errorMessage?: string
}

export default function FormInputLabel({
  className,
  label,
  errorMessage,
  ...props
}: TFormInputLabel) {
  return (
    <div>
      <div className="flex flex-col">
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <FormInput id={label} {...props} className={twMerge("", className)} />
      </div>

      <span className="text-xs text-red-500">{errorMessage}</span>
    </div>
  )
}
