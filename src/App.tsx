import { CardList } from "./components/CardList"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { GlobalStyles } from "./styles"

function App() {

  return (
    <>
      <GlobalStyles />
      <Hero />
      <div className="container">
        <CardList />
      </div>
      <Footer />
    </>
  )
}

export default App
