import * as Dialog from "@radix-ui/react-dialog"
import { useMutation } from "@tanstack/react-query"
import { ChevronsUp, Clock } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Utils } from "../lib/Utils"
import { TDriver } from "../services/Driver/driver"
import { TConfirmWithoutDriver, TEstimate } from "../services/Ride/Ride"
import { RideService } from "../services/Ride/Ride.service"
import ConfirmCancelModal from "./ConfirmCancelModal"
import DriverSelection from "./DriverSelection"

type TRideConfirmModalProps = {
  estimate: TEstimate | null | undefined
  confirm: TConfirmWithoutDriver | null
  onOpen: (value: boolean) => void
  isOpen: boolean
}

export default function RideConfirmModal({
  estimate,
  onOpen,
  isOpen,
  confirm,
}: TRideConfirmModalProps) {
  const [driverSelected, setDriverSelected] = useState<TDriver>()
  const navigate = useNavigate()
  const confirmMutation = useMutation({
    mutationFn: RideService.confirm,
    onSuccess: () => {
      alert("Passeio confirmado com sucesso!")

      navigate("/history")
    },
  })

  const onConfirm = () => {
    if (confirm && driverSelected) {
      confirmMutation.mutate({
        ...confirm,
        driver: {
          id: driverSelected.id,
          name: driverSelected.name,
        },
        value: driverSelected.value,
      })
    }
  }

  return estimate ? (
    <ConfirmCancelModal
      disabled={!driverSelected}
      onConfirm={onConfirm}
      onOpen={onOpen}
      isOpen={isOpen}
    >
      <div className="flex flex-col gap-3 items-center">
        <Dialog.Title className="text-2xl uppercase text-center">
          Tudo pronto para viajar?
        </Dialog.Title>

        <div className="grid grid-cols-2 gap-3">
          <span className="flex items-center rounded-2xl text-emerald-500 gap-1 px-4 border-2 border-emerald-500">
            <ChevronsUp size={22} /> {Utils.convertDistance(estimate.distance)}
            KM
          </span>
          <span className="flex items-center justify-center rounded-2xl text-emerald-500 gap-1 px-4 border-2 border-emerald-500 h-10">
            <Clock size={18} /> {Utils.convertTime(estimate.duration)}M
          </span>
        </div>

        <Dialog.Description>Selecione um motorista</Dialog.Description>

        <div className="h-40 bg-zinc-200 w-full p-2 overflow-y-scroll flex flex-col gap-3">
          {estimate.options.map((driver) => (
            <DriverSelection
              onClick={() => setDriverSelected(driver)}
              selected={driver.id === driverSelected?.id}
              driver={driver}
              key={driver.id}
            />
          ))}
        </div>
      </div>
    </ConfirmCancelModal>
  ) : (
    <div />
  )
}
