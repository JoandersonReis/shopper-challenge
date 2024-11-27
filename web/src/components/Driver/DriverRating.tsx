import { Star } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDriverRating = ComponentProps<"span"> & {
  rating: number
}

export default function DriverRating({
  className,
  rating,
  ...props
}: TDriverRating) {
  return (
    <span
      {...props}
      className={twMerge(
        "flex items-center justify-center gap-1 text-zinc-400",
        className
      )}
    >
      <Star size={18} className="text-emerald-500" /> {rating}/5
    </span>
  )
}
