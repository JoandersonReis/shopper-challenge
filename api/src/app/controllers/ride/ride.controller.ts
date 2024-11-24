import { Request, Response, Router } from "express"
import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware"
import { BaseController } from "../BaseController"
import {
  EstimateSchema,
  RideConfirmSchema,
  TEstimateSchema,
  TRideConfirmSchema,
} from "./ride.schemas"
import { rideService } from "./ride.service"

class RideController implements BaseController {
  get getRoutes(): [string, Router] {
    const router = Router()

    router.post(
      "/estimate",
      validateSchemaMiddleware(EstimateSchema),
      this.estimate
    )

    router.post(
      "/confirm",
      validateSchemaMiddleware(RideConfirmSchema),
      this.confirm
    )

    return ["/ride", router]
  }

  private async estimate(request: Request, response: Response) {
    try {
      const body = request.body as TEstimateSchema

      const routes = await rideService.getRoutes(body.origin, body.destination)

      response.json(routes).status(200)
    } catch (err) {
      response.json(err[0]).status(err[1])
    }
  }

  private async confirm(request: Request, response: Response) {
    try {
      const body = request.body as TRideConfirmSchema

      const confirm = await rideService.confirm(body)

      response.json(confirm).status(200)
    } catch (err) {
      response.json(err[0]).status(err[1])
    }
  }
}

export const rideController = new RideController()
