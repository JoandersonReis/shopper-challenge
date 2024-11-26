import cors from "cors"
import express from "express"
import routes from "./app/router"

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.get("/healthcheck", (req, res) => {
  res.json({ message: "Succefully" })
})

export default app
