import { Routes, Route } from "react-router-dom"
import Details from "./Pages/Details"
import Home from "./Pages/Home"

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/details/:id" Component={Details} />
    </Routes>
  )
}

export default Rotas
