import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDriverName = ComponentProps<"strong">

export default function DriverName({ className, ...props }: TDriverName) {
  return <strong {...props} className={twMerge("", className)} />
}
