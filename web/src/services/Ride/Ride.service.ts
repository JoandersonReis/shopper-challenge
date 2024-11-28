import { TNewRideSchema } from "../../schemas/NewRideSchema"
import api from "../api"
import {
  TConfirm,
  TEstimate,
  THistoryParams,
  TRide,
  TRidesResponse,
} from "./Ride"

export class RideService {
  static async estimate(data: TNewRideSchema): Promise<TEstimate | null> {
    try {
      const response = await api.post("/ride/estimate", data)

      return response.data
    } catch (err: any) {
      alert(err.response.data.error_description)

      return null
    }
  }

  static async confirm(data: TConfirm) {
    try {
      const response = await api.post("/ride/confirm", data)

      return response.data
    } catch (err: any) {
      alert(err.response.data.error_description)
    }
  }

  static async getByCustomer(data: THistoryParams): Promise<TRide[] | null> {
    try {
      const response = await api.get<TRidesResponse>(
        `/ride/${data.customerId}?${
          data.driverId ? `driver_id=${data.driverId}` : ""
        }`
      )

      return response.data.rides
    } catch (err: any) {
      alert(err.response.data.error_description)

      return null
    }
  }
}
