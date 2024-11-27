import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormSelect = ComponentProps<"select">

export default function FormSelect({ className, ...props }: TFormSelect) {
  return (
    <select
      {...props}
      className={twMerge(
        "h-8 border border-zinc-300 rounded-sm bg-white",
        className
      )}
    />
  )
}
