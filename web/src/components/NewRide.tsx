import { Car } from "lucide-react"
import { Form } from "./Form"

export default function NewRide() {
  return (
    <Form.Root>
      <Form.Content>
        <Form.Title>Dados</Form.Title>
        <Form.InputLabel label="ID do usuário" placeholder="Ex: 1" />
      </Form.Content>

      <Form.Content>
        <Form.Title>Viagem</Form.Title>
        <Form.InputLabel label="Origem" placeholder="Ex: Rua da Alvorada" />
        <Form.InputLabel
          label="Destino"
          placeholder="Ex: Rua Correia Sampaio"
        />
      </Form.Content>

      <Form.Button disabled>
        <Car
          size={22}
          className="group-hover:animate-pulse z-20 group-disabled:animate-none"
        />{" "}
        <p className="z-20">Viajar</p>
      </Form.Button>
    </Form.Root>
  )
}
