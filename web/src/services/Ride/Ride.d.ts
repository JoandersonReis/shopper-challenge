export type TLatLng = {
  latitude: number
  longitude: number
}

export type TEstimate = {
  origin: TLatLng
  destination: TLatLng
  distance: number
  duration: string
  options: TDriver[]
  routeResponse: {
    polyline: {
      encodedPolyline: string
    }
  }
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

export type TRide = {
  id: number
  date: string
  origin: string
  destination: string
  distance: number
  duration: string
  driver: {
    id: number
    name: string
  }
  value: number
}

export type TRidesResponse = {
  customer_id: string
  rides: TRide[]
}

export type THistoryParams = {
  customerId: string
  driverId?: string
}
