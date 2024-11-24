import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"
import ErrorResponse from "../../lib/Errors"

export type TSchemaType = "body" | "query" | "param"

export const validateSchemaMiddleware =
  (schema: AnyZodObject, type: TSchemaType = "body") =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      if (type === "body") schema.parse(request.body)

      if (type === "query") schema.parse(request.query)

      if (type === "param") schema.parse(request.params)

      return next()
    } catch (error: any) {
      const errors = error.issues.map((item: any) => {
        return {
          field: item.path[0],
          error: item.message,
        }
      })

      response
        .json({
          ...ErrorResponse.throw(
            "INVALID_DATA",
            "Os dados fornecidos no corpo da requisição são inválidos"
          ),
          errors,
        })
        .status(400)
    }
  }
