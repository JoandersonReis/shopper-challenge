import ErrorResponse from "../../../lib/Errors"
import { Utils } from "../../../lib/Utils"
import { GoogleRoutes } from "../../../services/GoogleRoutes"
import { DriverRepository } from "../driver/driver.repository"
import { TError } from "../types"
import { TEstimateResponse } from "./ride"
import { RideRepository } from "./ride.repository"
import { TRideConfirmSchema } from "./ride.schemas"

class RideService {
  public async estimate(
    origin: string,
    destination: string
  ): Promise<TEstimateResponse | TError> {
    try {
      const driverRepo = new DriverRepository()

      if (origin === destination) {
        throw ErrorResponse.throw(
          "INVALID_DATA",
          "Os dados fornecidos no corpo da requisição são inválidos"
        )
      }

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
        routeResponse: routes.routes[0],
      }
    } catch (err) {
      throw ErrorResponse.throw(
        "INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos"
      )
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

    if (!driver) {
      throw ErrorResponse.throw(
        "DRIVER_NOT_FOUND",
        "Motorista não encontrado",
        404
      )
    }

    if (driver.min_distance > Utils.convertDistance(ride.distance)) {
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
      customer_id: ride.customer_id,
      driver_id: driver.id,
      duration: ride.duration,
      origin: ride.origin,
      value: ride.value,
    })

    return {
      success: true,
    }
  }

  public async history(customer_id: string, driver_id: number | null) {
    const driverRepo = new DriverRepository()
    const rideRepo = new RideRepository()

    if (driver_id) {
      const driver = await driverRepo.get(driver_id)

      if (!driver) {
        throw ErrorResponse.throw("INVALID_DRIVER", "Motorista inválido")
      }
    }

    const rides = await rideRepo.getByCustomer(customer_id, driver_id)

    if (rides.length === 0) {
      throw ErrorResponse.throw(
        "NO_RIDES_FOUND",
        "Nenhum registro encontrado!",
        404
      )
    }

    return {
      customer_id: String(customer_id),
      rides,
    }
  }
}

export const rideService = new RideService()
