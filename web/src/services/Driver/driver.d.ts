export type TDriver = {
  id: number
  vehicle: string
  name: string
  description: string
  review: {
    rating: number
    comment: string
  }
  value: number
}
