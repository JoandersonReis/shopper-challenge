import { z } from "zod"

export const EstimateSchema = z.object({
  customer_id: z.string().min(1, "Campo ID obrigatório!"),
  origin: z.string().min(3, "Campo 'origin' obrigatório!"),
  destination: z.string().min(3, "Campo 'destination' obrigatório!"),
})

export type TEstimateSchema = z.infer<typeof EstimateSchema>

export const RideConfirmSchema = z.object({
  origin: z.string().min(3, "Campo 'origin' obrigatório!"),
  destination: z.string().min(3, "Campo 'destination' obrigatório!"),
  customer_id: z.string().min(1, "Campo ID obrigatório!"),
  distance: z.number().min(10, "Distancia muito curta!"),
  duration: z.string().min(1, "Duração é um campo obrigatório!"),
  driver: z.object({
    id: z.number().min(1, "ID inválido"),
    name: z.string().min(2, "Nome inválido"),
  }),
  value: z.number().min(1, "Valor muito baixo"),
})

export type TRideConfirmSchema = z.infer<typeof RideConfirmSchema>
