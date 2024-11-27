import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormButton = ComponentProps<"button">

export default function FormButton({ className, ...props }: TFormButton) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-white relative flex items-center justify-center gap-3 rounded-2xl px-4 text-emerald-500 h-8 uppercase disabled:bg-zinc-400 disabled:border-2 disabled:border-zinc-400 group after:content-[''] after:absolute after:w-0 after:h-full after:bg-emerald-500 after:z-10 after:rounded-2xl after:transition-all after:left-0 hover:after:w-full z-[0] border-emerald-500 border-2 hover:text-white after:duration-500 disabled:hover:after:w-0 disabled:text-white",
        className
      )}
    />
  )
}
