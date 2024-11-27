type TToDistance = "KM" | "METERS"
type TToTime = "MIN" | "HOUR"

export class Utils {
  public static convertDistance(distance: number, to: TToDistance = "KM") {
    if (to === "KM") {
      return (distance / 1000).toFixed(1)
    }

    return distance * 1000
  }

  public static convertTime(time: string, to: TToTime = "MIN") {
    const timeFormated = Number(time.split("s").join(""))
    const minutes = timeFormated / 60
    const hours = timeFormated / 60 / 60

    if (to === "MIN") {
      return Math.ceil(minutes)
    }

    return hours
  }

  public static convertNumberInReal(value: number) {
    const real = Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    return real.format(value)
  }

  public static convertDate(dateValue: string) {
    const date = new Date(dateValue)
    const month = date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
    const monthFormated = month < 10 ? `0${month}` : `${month}`
    const year = date.getFullYear()

    return `${day}/${monthFormated}/${year}`
  }
}
