import { prisma } from "../../../../prisma/prisma"
import ErrorResponse from "../../../lib/Errors"
import { TCreateRideData } from "./ride"

export class RideRepository {
  public async create(data: TCreateRideData) {
    try {
      await prisma.ride.create({
        data,
      })
    } catch (err) {
      throw ErrorResponse.throw(
        "INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos"
      )
    }
  }

  public async getByCustomer(customer_id: number, driver_id: number | null) {
    try {
      const where = {
        customer_id,
        driver_id,
      }

      if (!driver_id) {
        delete where.driver_id
      }

      const rides = await prisma.ride.findMany({
        where: where,
        select: {
          id: true,
          date: true,
          origin: true,
          destination: true,
          distance: true,
          duration: true,
          value: true,
          driver: {
            select: {
              id: true,
              name: true,
            },
          },
        },

        orderBy: {
          id: "desc",
        },
      })

      return rides
    } catch (err) {
      throw ErrorResponse.throw(
        "INVALID_DATA",
        "Os dados fornecidos no corpo da requisição são inválidos"
      )
    }
  }
}
