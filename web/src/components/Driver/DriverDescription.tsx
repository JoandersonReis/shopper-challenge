import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDriverDescription = ComponentProps<"p">

export default function DriverDescription({
  className,
  children,
  ...props
}: TDriverDescription) {
  return (
    <p {...props} className={twMerge("text-xs text-zinc-400", className)}>
      {children?.toString().split("").slice(0, 60).join("")}...
    </p>
  )
}
