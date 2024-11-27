import { Router } from "express"
import { driverController } from "./controllers/driver/driver.controller"
import { rideController } from "./controllers/ride/ride.controller"

const routes = Router()

const controllers = [rideController, driverController]

controllers.forEach((item) => routes.use(...item.getRoutes))

export default routes
