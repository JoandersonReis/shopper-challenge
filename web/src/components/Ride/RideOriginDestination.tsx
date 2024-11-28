import { ArrowDown } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TRideOriginDestination = ComponentProps<"h3"> & {
  origin: string
  destination: string
}

export default function RideOriginDestination({
  className,
  origin,
  destination,
  ...props
}: TRideOriginDestination) {
  return (
    <h3
      {...props}
      className={twMerge(
        "text-emerald-500 flex flex-col gap-1 uppercase text-xs items-center",
        className
      )}
    >
      {origin}
      <ArrowDown size={18} className="text-zinc-400" />
      {destination}
    </h3>
  )
}
