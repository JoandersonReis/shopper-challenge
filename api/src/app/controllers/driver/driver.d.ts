export type TDriver = {
  id: number
  name: string
  description: string
  review: {
    rating: number
    comment: string
  }
  value: number
}
