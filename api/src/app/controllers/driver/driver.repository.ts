import { prisma } from "../../../../prisma/prisma"
import ErrorResponse from "../../../lib/Errors"
import { Utils } from "../../../lib/Utils"

export class DriverRepository {
  public async all() {
    try {
      const drivers = await prisma.driver.findMany()

      return drivers
    } catch (err) {
      throw ErrorResponse.throw("INVALID_DATA", "Informações inválidas!")
    }
  }

  public async getByDistance(distance: number) {
    const drivers = await prisma.driver.findMany({
      where: {
        min_distance: {
          lte: Utils.convertDistance(distance),
        },
      },
      include: {
        Review: {
          select: {
            comment: true,
            rating: true,
          },
        },
      },
      orderBy: {
        value: "asc",
      },
    })

    return drivers
  }

  public async get(id: number) {
    try {
      const driver = await prisma.driver.findUnique({
        where: {
          id,
        },
      })

      return driver
    } catch (err) {
      throw ErrorResponse.throw(
        "DRIVER_NOT_FOUND",
        "Motorista não encontrado",
        404
      )
    }
  }
}
