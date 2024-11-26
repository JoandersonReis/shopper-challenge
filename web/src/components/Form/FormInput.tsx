import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormInput = ComponentProps<"input">

export default function FormInput({ className, ...props }: TFormInput) {
  return (
    <input
      {...props}
      className={twMerge(
        "h-8 border-zinc-400 rounded-sm px-2 border",
        className
      )}
    />
  )
}
