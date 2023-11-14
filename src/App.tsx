import { BrowserRouter } from "react-router-dom"

import Rotas from "./routes"
import { Footer } from "./components/Footer"
import { GlobalStyles } from "./styles"


const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
