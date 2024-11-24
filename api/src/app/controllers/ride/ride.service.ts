import ErrorResponse from "../../../lib/Errors"
import { Utils } from "../../../lib/Utils"
import { GoogleRoutes } from "../../../services/GoogleRoutes"
import { DriverRepository } from "../driver/driver.repository"
import { TError } from "../types"
import { TEstimateResponse } from "./ride"
import { RideRepository } from "./ride.repository"
import { TRideConfirmSchema } from "./ride.schemas"

class RideService {
  public async getRoutes(
    origin: string,
    destination: string
  ): Promise<TEstimateResponse | TError> {
    const driverRepo = new DriverRepository()

    const routes = await GoogleRoutes.getRoutes(origin, destination)
    const drivers = await driverRepo.getByDistance(
      routes.routes[0].distanceMeters
    )

    const driversFormated = drivers.map((driver) => ({
      ...driver,
      review: driver.Review[0],
      value:
        driver.value * Utils.convertDistance(routes.routes[0].distanceMeters),
    }))

    return {
      origin: {
        latitude: routes.routes[0].legs[0].startLocation.latLng.latitude,
        longitude: routes.routes[0].legs[0].startLocation.latLng.longitude,
      },
      destination: {
        latitude: routes.routes[0].legs[0].endLocation.latLng.latitude,
        longitude: routes.routes[0].legs[0].endLocation.latLng.longitude,
      },
      distance: routes.routes[0].distanceMeters,
      duration: routes.routes[0].duration,
      options: driversFormated,
      routeResponse: routes,
    }
  }

  public async confirm(ride: TRideConfirmSchema) {
    const driverRepo = new DriverRepository()
    const rideRepo = new RideRepository()

    if (ride.origin === ride.destination) {
      throw ErrorResponse.throw(
        "INVALID_DATA",
        "Os dados fornecidos da requisição são inválidos"
      )
    }

    const driver = await driverRepo.get(ride.driver.id)

    if (driver.min_distance >= Utils.convertDistance(ride.distance)) {
      throw ErrorResponse.throw(
        "INVALID_DISTANCE",
        "Quilometragem inválida para o motorista",
        406
      )
    }

    if (Utils.convertDistance(ride.distance) * driver.value !== ride.value) {
      throw ErrorResponse.throw(
        "INVALID_DATA",
        "Os dados fornecidos da requisição são inválidos"
      )
    }

    await rideRepo.create({
      destination: ride.destination,
      distance: ride.distance,
      customer_id: Number(ride.customer_id),
      driver_id: driver.id,
      duration: ride.duration,
      origin: ride.origin,
      value: ride.value,
    })

    return {
      success: true,
    }
  }
}

export const rideService = new RideService()