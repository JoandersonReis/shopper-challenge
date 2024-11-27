import { useMutation, useQuery } from "@tanstack/react-query"
import { Car, CheckCircle, Search } from "lucide-react"
import { FormEvent, useState } from "react"
import Button from "../components/Button"
import { Form } from "../components/Form"
import RideHistory from "../components/RideHistory"
import DriverService from "../services/Driver/driver.service"
import { RideService } from "../services/Ride/Ride.service"

export default function History() {
  const [customerId, setCustomerId] = useState("")
  const [driverId, setDriverId] = useState<string>("0")

  const { data: drivers } = useQuery({
    queryKey: ["drivers"],
    queryFn: DriverService.all,
  })

  const { mutate: rideMutate, data: rides } = useMutation({
    mutationKey: ["rides"],
    mutationFn: RideService.getByCustomer,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    rideMutate({ customerId, driverId })
  }

  return (
    <main className="min-h-screen bg-zinc-200 flex flex-col">
      <header className="bg-emerald-500 flex items-center justify-center rounded-bl-3xl rounded-br-3xl relative shadow-md z-20">
        <section className="max-w-3xl">
          <Form.Root
            className="bg-transparent border-none shadow-none"
            onSubmit={onSubmit}
          >
            <div className="grid md:grid-cols-2 gap-2">
              <div className="flex flex-col">
                <Form.Label htmlFor="customer_id" className="text-white">
                  ID de usuário
                </Form.Label>
                <Form.Input
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
                onClick={() => rideMutate({ customerId })}
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
        </section>

        <a
          href="/"
          className="flex items-center justify-center bg-emerald-500 rounded-b-3xl absolute bottom-[-32px] h-8 text-white uppercase gap-2 w-44 border-b-2 border-r-2 border-l-2 border-emerald-500 hover:bg-white hover:text-emerald-500 transition-all"
        >
          <Car size={18} /> Viajar
        </a>
      </header>

      <section className=" flex-1 flex bg-history bg-no-repeat bg-fixed bg-center">
        <div className="bg-zinc-200/50 flex-1 py-14 px-4">
          {!rides && (
            <h1 className="text-3xl text-center text-zinc-500">
              VEJA SEU HISTÓRICO DE VIAGENS AQUI
            </h1>
          )}

          <div className="grid grid-cols-1 gap-4">
            {rides &&
              rides.map((ride) => <RideHistory ride={ride} key={ride.id} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
