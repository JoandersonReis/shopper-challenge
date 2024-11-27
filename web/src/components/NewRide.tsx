import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Car, Menu } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { NewRideSchema, TNewRideSchema } from "../schemas/NewRideSchema"
import { TConfirmWithoutDriver } from "../services/Ride/Ride"
import { RideService } from "../services/Ride/Ride.service"
import { Form } from "./Form"
import RideConfirmModal from "./RideConfirmModal"

export default function NewRide() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TNewRideSchema>({
    resolver: zodResolver(NewRideSchema),
  })

  const [isSubmitActived, setIsSubmitActived] = useState(false)
  const [isRideConfirmModalOpen, setIsRideConfirmModalOpen] = useState(false)
  const [confirmData, setConfirmData] = useState<TConfirmWithoutDriver | null>(
    null
  )

  const { mutate: estimateMutate, data: rideEstimateResponse } = useMutation({
    mutationFn: RideService.estimate,
    mutationKey: ["estimateResponse"],
    onSuccess: (data) => {
      const values = getValues()

      if (data) {
        setConfirmData({
          ...values,
          distance: data.distance,
          duration: data.duration,
        })
      }

      setIsSubmitActived(false)
      setIsRideConfirmModalOpen(true)
    },
    onError: () => setIsSubmitActived(false),
  })

  const onSubmit = async (data: TNewRideSchema) => {
    estimateMutate(data)
    setIsSubmitActived(true)
  }

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <RideConfirmModal
        estimate={rideEstimateResponse}
        onOpen={setIsRideConfirmModalOpen}
        isOpen={isRideConfirmModalOpen}
        confirm={confirmData}
      />

      <Form.Content>
        <Form.Title>Dados</Form.Title>
        <Form.InputLabel
          errorMessage={errors.customer_id?.message}
          label="ID do usuário"
          placeholder="Ex: 1"
          name="customer_id"
          register={register}
        />
      </Form.Content>

      <Form.Content>
        <Form.Title>Viagem</Form.Title>
        <Form.InputLabel
          errorMessage={errors.origin?.message}
          name="origin"
          register={register}
          label="Origem"
          placeholder="Ex: Rua da Alvorada"
        />
        <Form.InputLabel
          name="destination"
          register={register}
          label="Destino"
          placeholder="Ex: Rua Correia Sampaio"
          errorMessage={errors.destination?.message}
        />
      </Form.Content>

      <Form.Button disabled={isSubmitActived}>
        <Car
          size={22}
          className="group-hover:animate-pulse z-20 group-disabled:animate-none"
        />{" "}
        <p className="z-20">Viajar</p>
      </Form.Button>
      <a
        href="/history"
        className="w-full text-white bg-emerald-500 rounded-3xl flex items-center justify-center gap-2 h-8 cursor-pointer"
      >
        <Menu size={22} /> Histórico de viagens
      </a>
    </Form.Root>
  )
}
