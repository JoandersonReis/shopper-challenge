import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDriverProfile = ComponentProps<"img">

export default function DriverProfile({ className, ...props }: TDriverProfile) {
  return (
    <div className="w-10 h-10 overflow rounded-full p-1 bg-emerald-500">
      <img
        src="/assets/images/no-profile.png"
        alt="Perfil de motorista"
        {...props}
        className={twMerge("rounded-full", className)}
      />
    </div>
  )
}
