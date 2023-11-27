import { Hero } from '../../components/Hero'
import { RestaurantList } from '../../components/RestaurantList'
import { useEffect, useState } from 'react';
import { Restaurant } from '../../types/api';

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    const getData = async () => {
      const restaurantData = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json());
      setRestaurants(restaurantData);
    };
    getData()
  }, [])

  return (
    <>
      <Hero />
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
