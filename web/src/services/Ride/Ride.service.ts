import { TNewRideSchema } from "../../schemas/NewRideSchema"
import api from "../api"
import { TConfirm, TEstimate } from "./Ride"

export class RideService {
  static async estimate(data: TNewRideSchema): Promise<TEstimate | null> {
    try {
      const response = await api.post("/ride/estimate", data)

      if (response.status !== 200) {
        alert(response.data.error_description)

        return null
      }

      return response.data
    } catch (err: any) {
      alert(err.response.data.error_description)

      return null
    }
  }

  static async confirm(data: TConfirm) {
    try {
      const response = await api.post("/ride/confirm", data)

      if (response.status !== 200) {
        return
      }

      return response.data
    } catch (err: any) {
      alert(err.response.data.error_description)
    }
  }
}
