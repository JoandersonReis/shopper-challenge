import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import FormInput from "./FormInput"
import FormLabel from "./FormLabel"

type TFormInputLabel = ComponentProps<"input"> & {
  label: string
}

export default function FormInputLabel({
  className,
  label,
  ...props
}: TFormInputLabel) {
  return (
    <div>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <FormInput id={label} {...props} className={twMerge("", className)} />
    </div>
  )
}
