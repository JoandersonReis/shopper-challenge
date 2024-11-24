import { TLatLng } from "../../../services/GoogleRoutesTypes"

export type TEstimateResponse = {
  origin: TLatLng
  destination: TLatLng
  distance: number
  duration: string
  options: TDriver[]
  routeResponse: object
}

export type TCreateRideData = {
  customer_id: number
  origin: string
  destination: string
  value: number
  distance: number
  duration: string
  driver_id: number
}
