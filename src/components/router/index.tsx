import { useParams } from "react-router-dom"

export default function MoreInfo() {
  const {id}=useParams()
  return (
    <div>{id}</div>
  )
}
