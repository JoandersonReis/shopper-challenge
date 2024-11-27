import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TRideContent = ComponentProps<"div">

export default function RideContent({ className, ...props }: TRideContent) {
  return <div {...props} className={twMerge("", className)} />
}
