import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormOption = ComponentProps<"option">

export default function FormOption({ className, ...props }: TFormOption) {
  return <option {...props} className={twMerge("", className)} />
}
