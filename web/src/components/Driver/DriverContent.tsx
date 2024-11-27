import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDriverContent = ComponentProps<"div">

export default function DriverContent({ className, ...props }: TDriverContent) {
  return <div {...props} className={twMerge("w-full", className)} />
}
