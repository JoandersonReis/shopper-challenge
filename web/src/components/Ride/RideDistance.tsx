import { ChevronsUp } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Utils } from "../../lib/Utils"

type TRideDistance = ComponentProps<"span"> & {
  distance: number
}

export default function RideDistance({
  className,
  distance,
  ...props
}: TRideDistance) {
  return (
    <span
      {...props}
      className={twMerge(
        "flex items-center justify-center text-xs gap-1 text-zinc-400",
        className
      )}
    >
      <ChevronsUp size={16} /> {Utils.convertDistance(distance)} KM
    </span>
  )
}
