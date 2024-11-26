import { CarFront, ChevronsUp, MapPinCheck } from "lucide-react"

export default function Welcome() {
  const advantages = [
    {
      title: "Viajar para qualquer lugar",
      Icon: MapPinCheck,
    },
    {
      title: "Conforto",
      Icon: CarFront,
    },
    {
      title: "Agilidade",
      Icon: ChevronsUp,
    },
  ]

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="uppercase text-3xl">Bem vindo(a)!</h1>

        <p className="text-zinc-500">
          Aqui na Shopper Viagens você pode chegar onde quiser. Qualidade,
          agilidade e conforto são nossas melhores qualidades.
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {advantages.map((item) => (
          <li key={item.title} className="flex items-center gap-3 text-lg">
            {<item.Icon size={18} className="text-emerald-500" />} {item.title}
          </li>
        ))}
      </ul>
    </section>
  )
}
