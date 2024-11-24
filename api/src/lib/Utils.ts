type TTo = "KM" | "METERS"

export class Utils {
  public static convertDistance(distance: number, to: TTo = "KM") {
    if (to === "KM") {
      return distance / 1000
    }

    return distance * 1000
  }
}
