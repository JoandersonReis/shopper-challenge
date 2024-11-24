import { Router } from "express"
import { rideController } from "./controllers/ride/ride.controller"

const routes = Router()

const controllers = [rideController]

controllers.forEach((item) => routes.use(...item.getRoutes))

export default routes
