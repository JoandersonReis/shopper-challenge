import { CalendarCheck } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Utils } from "../../lib/Utils"

type TRideDate = ComponentProps<"span">

export default function RideDate({ className, children, ...props }: TRideDate) {
  return (
    <span
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-1 text-zinc-400 text-xs",
        className
      )}
    >
      <CalendarCheck size={16} /> {Utils.convertDate(String(children), true)}
    </span>
  )
}
