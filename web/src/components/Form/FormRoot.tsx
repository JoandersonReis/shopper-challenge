import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormRoot = ComponentProps<"form">

export default function FormRoot({ className, ...props }: TFormRoot) {
  return (
    <form
      {...props}
      className={twMerge(
        "p-8 bg-white/80 rounded-md shadow-md border-zinc-300 border flex flex-col gap-3",
        className
      )}
    />
  )
}
