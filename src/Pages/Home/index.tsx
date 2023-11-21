import { Hero } from '../../components/Hero'
import { CardList } from '../../components/CardList'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <CardList orientation="vertical" />
      </div>
    </>
  )
}

export default Home
