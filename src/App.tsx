import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import Rotas from "./routes"
import { Footer } from "./components/Footer"
import { GlobalStyles } from "./styles"
import { store } from "./store"


const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
