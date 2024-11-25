import { Request, Response, Router } from "express"
import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware"
import { BaseController } from "../BaseController"
import {
  EstimateSchema,
  HistoryParamsSchema,
  HistoryQueriesSchema,
  RideConfirmSchema,
  TEstimateSchema,
  THistoryParamsSchema,
  THistoryQueriesSchema,
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

    router.get(
      "/:customer_id",
      [
        validateSchemaMiddleware(HistoryParamsSchema, "param"),
        validateSchemaMiddleware(HistoryQueriesSchema, "query"),
      ],
      this.history
    )

    return ["/ride", router]
  }

  private async estimate(request: Request, response: Response) {
    try {
      const body = request.body as TEstimateSchema

      const routes = await rideService.getRoutes(body.origin, body.destination)

      response.json(routes)
    } catch (err) {
      response.status(err[1]).json(err[0])
    }
  }

  private async confirm(request: Request, response: Response) {
    try {
      const body = request.body as TRideConfirmSchema

      const confirm = await rideService.confirm(body)

      response.json(confirm)
    } catch (err) {
      response.status(err[1]).json(err[0])
    }
  }

  private async history(request: Request, response: Response) {
    try {
      const params = request.params as THistoryParamsSchema
      const queries = request.query as THistoryQueriesSchema

      const rides = await rideService.history(
        params.customer_id,
        queries.driver_id || null
      )

      response.json(rides)
    } catch (err) {
      response.status(err[1]).json(err[0])
    }
  }
}

export const rideController = new RideController()
