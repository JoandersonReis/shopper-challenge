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
}
