import { ComponentProps } from "react"
import { TRide } from "../services/Ride/Ride"
import { Driver } from "./Driver"
import { Ride } from "./Ride"

type TRideHistory = ComponentProps<"div"> & {
  ride: TRide
}

export default function RideHistory({ ride }: TRideHistory) {
  return (
    <Ride.Root className="bg-white shadow-md rounded-md py-2">
      <Ride.Content className="p-4">
        <Ride.Content className="flex items-center justify-center gap-4 text-zinc-400">
          <Ride.Distance distance={ride.distance} />
          -
          <Ride.Time time={ride.duration} />
        </Ride.Content>

        <Ride.OriginDestination
          origin={ride.origin}
          destination={ride.destination}
        />
      </Ride.Content>

      <Ride.Content className="flex items-center justify-between border-t border-emerald-500 p-4">
        <div className="flex items-center gap-2">
          <Driver.Profile />
          <Driver.Name>{ride.driver.name}</Driver.Name>
        </div>

        <Driver.Value value={ride.value} className="h-6 text-sm" />
      </Ride.Content>

      <Ride.Date>{ride.date}</Ride.Date>
    </Ride.Root>
  )
}
