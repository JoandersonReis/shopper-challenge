import { z } from "zod"

export const NewRideSchema = z.object({
  customer_id: z.string().min(1, "Campo obrigatório"),
  origin: z
    .string()
    .min(3, "Mínimo 3 caracteres!")
    .max(150, "Máximo 150 caracteres!"),
  destination: z
    .string()
    .min(3, "Mínimo 3 caracteres!")
    .max(150, "Máximo 150 caracteres!"),
})

export type TNewRideSchema = z.infer<typeof NewRideSchema>
