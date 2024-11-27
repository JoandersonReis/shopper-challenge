import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Utils } from "../../lib/Utils"

type TDriverValue = ComponentProps<"span"> & {
  value: number
}

export default function DriverValue({
  className,
  value,
  ...props
}: TDriverValue) {
  return (
    <span
      {...props}
      className={twMerge(
        "bg-emerald-500 text-white text-xl rounded-2xl px-8 py-1",
        className
      )}
    >
      R$ {Utils.convertNumberInReal(value)}
    </span>
  )
}
