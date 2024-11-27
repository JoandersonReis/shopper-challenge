export type TDriver = {
  id: number
  vehicle: string
  name: string
  description: string
  review: {
    rating: number
    comment: string
  }
  value: number
}

export type TEstimate = {
  origin: TLatLng
  destination: TLatLng
  distance: number
  duration: string
  options: TDriver[]
  routeResponse: object
}

export type TConfirm = {
  origin: string
  destination: string
  customer_id: string
  distance: number
  duration: string
  driver: {
    id: number
    name: string
  }
  value: number
}

export type TConfirmWithoutDriver = {
  origin: string
  destination: string
  customer_id: string
  distance: number
  duration: string
}
