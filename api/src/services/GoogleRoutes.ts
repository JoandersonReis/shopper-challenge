import { defaultRoutesFields } from "../lib/config/defaultRoutes"
import { TGetRoutes } from "./GoogleRoutesTypes"
import { routesAPI } from "./routesAPI"

export class GoogleRoutes {
  public static async getRoutes(
    origin: string,
    destination: string,
    fields: string = defaultRoutesFields
  ): Promise<TGetRoutes> {
    const originDestination = {
      via: false,
      vehicleStopover: false,
      sideOfRoad: true,
    }

    const body = {
      origin: {
        ...originDestination,
        address: origin,
      },
      destination: {
        ...originDestination,
        address: destination,
      },
      travelMode: "DRIVE",
      languageCode: "pt-BR",
      routingPreference: "TRAFFIC_AWARE_OPTIMAL",
    }

    const routes = await routesAPI.post<TGetRoutes>("/v2:computeRoutes", body, {
      params: {
        fields,
      },
    })

    return routes.data
  }
}
