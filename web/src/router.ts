import { createBrowserRouter } from "react-router"
import History from "./screens/History"
import Home from "./screens/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/history",
    Component: History,
  },
])
