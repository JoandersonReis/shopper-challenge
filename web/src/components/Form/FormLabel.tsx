import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormLabel = ComponentProps<"label">

export default function FormLabel({ className, ...props }: TFormLabel) {
  return (
    <label {...props} className={twMerge("text-zinc-500 text-sm", className)} />
  )
}
