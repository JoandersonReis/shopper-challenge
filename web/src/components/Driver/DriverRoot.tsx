import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDriverRoot = ComponentProps<"div">

export default function DriverRoot({ className, ...props }: TDriverRoot) {
  return <div {...props} className={twMerge("", className)} />
}
