import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormContent = ComponentProps<"fieldset">

export default function FormContent({ className, ...props }: TFormContent) {
  return (
    <fieldset
      {...props}
      className={twMerge(
        "border border-emerald-100 p-3 rounded-sm flex flex-col gap-2",
        className
      )}
    />
  )
}
