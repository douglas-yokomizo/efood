import { Hero } from '../../components/Hero'
import { RestaurantList } from '../../components/RestaurantList'

import { useGetAllRestaurantsQuery } from '../../services/api';

const Home = () => {
  const { data: restaurants } = useGetAllRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <div className="container">
          <RestaurantList restaurants={restaurants} />
        </div>
      </>
    )
  }
  return (
    <>
      <Hero />
      <div className='container'>
        <h2 style={{ display: 'grid', placeItems: 'center' }}>
          Carregando...
        </h2>
      </div>
    </>
  )
}

export default Home
