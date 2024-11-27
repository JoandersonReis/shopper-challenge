import clsx from "clsx"
import { ComponentProps } from "react"
import { TDriver } from "../services/Driver/driver"
import { Driver } from "./Driver"

type TDriverSelection = ComponentProps<"button"> & {
  driver: TDriver
  selected: boolean
}

export default function DriverSelection({
  driver,
  selected,
  ...props
}: TDriverSelection) {
  return (
    <Driver.Root>
      <Driver.Action {...props}>
        <Driver.Content
          className={clsx(
            "bg-white p-3 flex flex-col gap-2 rounded-sm border-2",
            {
              "border-emerald-500": selected,
              "border-white opacity-90": !selected,
            }
          )}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Driver.Profile />
              <div className="flex flex-col items-start">
                <Driver.Name>{driver.name}</Driver.Name>
                <Driver.Vehicle>{driver.vehicle}</Driver.Vehicle>
              </div>
            </div>

            <Driver.Rating rating={driver.review.rating} />
          </div>

          <Driver.Description>{driver.description}</Driver.Description>

          <Driver.Value value={driver.value} />
        </Driver.Content>
      </Driver.Action>
    </Driver.Root>
  )
}
