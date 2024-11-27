import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TRideRoot = ComponentProps<"div">

export default function RideRoot({ className, ...props }: TRideRoot) {
  return <div {...props} className={twMerge("", className)} />
}
