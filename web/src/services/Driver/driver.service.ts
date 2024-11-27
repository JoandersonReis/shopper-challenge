import api from "../api"
import { TDriver } from "./driver"

export default class DriverService {
  static async all(): Promise<TDriver[] | null> {
    try {
      const response = await api.get<TDriver[]>("/driver")

      return response.data
    } catch (err: any) {
      alert(err.response.data.error_description)

      return null
    }
  }
}
