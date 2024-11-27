import { DriverRepository } from "./driver.repository"

class DriverService {
  public async all() {
    const driverRepo = new DriverRepository()

    const drivers = await driverRepo.all()

    return drivers
  }
}

export const driverService = new DriverService()
