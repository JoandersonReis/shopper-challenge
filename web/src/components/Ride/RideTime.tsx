import { Clock } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Utils } from "../../lib/Utils"

type TRideTime = ComponentProps<"span"> & {
  time: string
}

export default function RideTime({ className, time, ...props }: TRideTime) {
  return (
    <span
      {...props}
      className={twMerge(
        "text-zinc-400 flex items-center justify-center gap-1 text-xs",
        className
      )}
    >
      <Clock size={16} /> {Utils.convertTime(time)} Min
    </span>
  )
}
