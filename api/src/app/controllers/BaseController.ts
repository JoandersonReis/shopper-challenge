import { Router } from "express"

export abstract class BaseController {
  abstract get getRoutes(): [string, Router]
}
