import { useMutation } from "@tanstack/react-query"
import { Car } from "lucide-react"
import HistoryFilter from "../components/HistoryFilter"
import RideHistory from "../components/RideHistory"
import { RideService } from "../services/Ride/Ride.service"

export default function History() {
  const { mutate: rideMutate, data: rides } = useMutation({
    mutationKey: ["rides"],
    mutationFn: RideService.getByCustomer,
  })

  return (
    <main className="min-h-screen bg-zinc-200 flex flex-col">
      <header className="bg-emerald-500 flex items-center justify-center rounded-bl-3xl rounded-br-3xl relative shadow-md z-20">
        <section className="max-w-3xl">
          <HistoryFilter mutate={rideMutate} />
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {rides &&
              rides.map((ride) => <RideHistory ride={ride} key={ride.id} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
