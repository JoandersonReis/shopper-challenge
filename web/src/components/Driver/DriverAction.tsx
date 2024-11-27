import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDriverAction = ComponentProps<"button">

export default function DriverAction({ className, ...props }: TDriverAction) {
  return (
    <button
      {...props}
      className={twMerge("w-full transition-all duration-700", className)}
    />
  )
}
