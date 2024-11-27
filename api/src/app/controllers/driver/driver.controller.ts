import { Request, Response, Router } from "express"
import { BaseController } from "../BaseController"
import { driverService } from "./driver.service"

class DriverController implements BaseController {
  get getRoutes(): [string, Router] {
    const routes = Router()

    routes.get("/", this.all)

    return ["/driver", routes]
  }

  private async all(request: Request, response: Response) {
    try {
      const drivers = await driverService.all()

      response.json(drivers)
    } catch (err) {
      response.status(err[1]).json(err[0])
    }
  }
}

export const driverController = new DriverController()
