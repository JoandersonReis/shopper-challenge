export type TGetRoutes = {
  routes: TRoute[]
}

type TRoute = {
  legs: {
    startLocation: {
      latLng: TLatLng
    }
    endLocation: {
      latLng: TLatLng
    }
  }[]
  distanceMeters: number
  duration: string
  polyline: {
    encodedPolyline: string
  }
  localizedValues: {
    distance: TLocalizedValuesSchema
    duration: TLocalizedValuesSchema
    staticDuration: TLocalizedValuesSchema
  }
}

export type TLatLng = {
  latitude: number
  longitude: number
}

type TLocalizedValuesSchema = {
  text: string
}
