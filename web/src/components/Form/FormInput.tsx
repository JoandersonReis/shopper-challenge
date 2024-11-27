import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"

type TFormInput = ComponentProps<"input"> & {
  register?: UseFormRegister<any>
  name: string
}

export default function FormInput({
  className,
  register,
  name,
  ...props
}: TFormInput) {
  return register ? (
    <input
      {...props}
      {...register(name)}
      className={twMerge(
        "h-8 border-zinc-400 rounded-sm px-2 border w-full",
        className
      )}
    />
  ) : (
    <input
      {...props}
      className={twMerge(
        "h-8 border-zinc-400 rounded-sm px-2 border w-full",
        className
      )}
    />
  )
}
