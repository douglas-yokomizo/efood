import { Hero } from '../../components/Hero'
import Loader from '../../components/Loader';
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
        <Loader />
      </div>
    </>
  )
}

export default Home
