import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDriverVehicle = ComponentProps<"span">

export default function DriverVehicle({
  className,
  children,
  ...props
}: TDriverVehicle) {
  return (
    <span {...props} className={twMerge("text-sm text-zinc-400", className)}>
      {children?.toString().split(" ").slice(0, 3).join(" ")}
    </span>
  )
}
