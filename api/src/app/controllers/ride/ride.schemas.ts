import { z } from "zod"

export const EstimateSchema = z.object({
  customer_id: z
    .string()
    .min(1, "Campo ID obrigatório!")
    .transform((item) => item.toLocaleLowerCase()),
  origin: z.string().min(3, "Campo 'origin' obrigatório!"),
  destination: z.string().min(3, "Campo 'destination' obrigatório!"),
})

export type TEstimateSchema = z.infer<typeof EstimateSchema>

export const RideConfirmSchema = z.object({
  origin: z.string().min(3, "Campo 'origin' obrigatório!"),
  destination: z.string().min(3, "Campo 'destination' obrigatório!"),
  customer_id: z
    .string()
    .min(1, "Campo ID obrigatório!")
    .transform((item) => item.toLocaleLowerCase()),
  distance: z.number().min(10, "Distancia muito curta!"),
  duration: z.string().min(1, "Duração é um campo obrigatório!"),
  driver: z.object({
    id: z.number().min(1, "ID inválido"),
    name: z.string().min(2, "Nome inválido"),
  }),
  value: z.number().min(1, "Valor muito baixo"),
})

export type TRideConfirmSchema = z.infer<typeof RideConfirmSchema>

export const HistoryParamsSchema = z.object({
  customer_id: z
    .string()
    .min(1, "Campo 'customer_id' é obrigatório!")
    .transform((item) => item.toLocaleLowerCase()),
})

export type THistoryParamsSchema = z.infer<typeof HistoryParamsSchema>

export const HistoryQueriesSchema = z.object({
  driver_id: z
    .string()
    .optional()
    .transform((item) => (item ? Number(item) : null)),
})

export type THistoryQueriesSchema = z.infer<typeof HistoryQueriesSchema>
