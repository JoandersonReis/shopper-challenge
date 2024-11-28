import { UseMutateFunction, useQuery } from "@tanstack/react-query"
import { CheckCircle, Search } from "lucide-react"
import { ComponentProps, FormEvent, useState } from "react"
import DriverService from "../services/Driver/driver.service"
import { THistoryParams, TRide } from "../services/Ride/Ride"
import Button from "./Button"
import { Form } from "./Form"

type THistoryFilter = ComponentProps<"form"> & {
  mutate: UseMutateFunction<TRide[] | null, Error, THistoryParams, unknown>
}

export default function HistoryFilter({
  className,
  mutate,
  ...props
}: THistoryFilter) {
  const [customerId, setCustomerId] = useState("")
  const [driverId, setDriverId] = useState<string>("0")

  const { data: drivers } = useQuery({
    queryKey: ["drivers"],
    queryFn: DriverService.all,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    mutate({ customerId, driverId })
  }

  return (
    <Form.Root
      onSubmit={onSubmit}
      className="bg-transparent border-none shadow-none"
    >
      <div className="grid md:grid-cols-2 gap-2">
        <div className="flex flex-col">
          <Form.Label htmlFor="customer_id" className="text-white">
            ID de usuário
          </Form.Label>
          <Form.Input
            type="search"
            onChange={(e) => setCustomerId(e.target.value)}
            value={customerId}
            id="customer_id"
            placeholder="Ex: john doe"
            name="customer_id"
          />
        </div>

        <div className="flex flex-col">
          <Form.Label htmlFor="driver" className="text-white">
            Motorista
          </Form.Label>
          <Form.Select
            onChange={(e) => setDriverId(e.target.value)}
            defaultValue={0}
          >
            <Form.Option value="0">Selecione</Form.Option>
            {drivers?.map((driver) => (
              <Form.Option key={driver.id} value={driver.id}>
                {driver.name}
              </Form.Option>
            ))}
          </Form.Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={() => mutate({ customerId })}
          disabled={customerId.length === 0}
          className="bg-white text-emerald-500 border-white"
          type="button"
        >
          <CheckCircle size={18} />
          Todos
        </Button>

        <Button
          disabled={customerId.length === 0 || driverId === "0"}
          className="bg-white text-emerald-500 border-white"
        >
          <Search size={18} />
          Buscar
        </Button>
      </div>
    </Form.Root>
  )
}
