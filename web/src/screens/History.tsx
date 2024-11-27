import { ComponentProps } from "react"

type THistory = ComponentProps<"div">

export default function History(props: THistory) {
  return <div {...props} />
}
