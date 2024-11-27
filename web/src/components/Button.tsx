import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TButton = ComponentProps<"button">

export default function Button({ className, ...props }: TButton) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-emerald-500 border-2 border-emerald-500 px-4 h-8 flex items-center justify-center rounded-3xl text-white gap-3 uppercase transition-all duration-500 hover:bg-white hover:text-emerald-500 disabled:bg-zinc-300 disabled:text-white disabled:border-zinc-300",
        className
      )}
    />
  )
}
