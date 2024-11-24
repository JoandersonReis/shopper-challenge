import axios from "axios"

export const routesAPI = axios.create({
  baseURL: "https://routes.googleapis.com//directions",
  params: {
    key: process.env.GOOGLE_API_KEY,
  },
})
