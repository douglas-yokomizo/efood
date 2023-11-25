import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Restaurant } from "../../types/api"
import { Header } from "../../components/Header"
import { CardList } from "../../components/CardList"
import * as S from './styles'


const Details = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    const getData = async () => {
      const restaurantData = await fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then(res => res.json());
      setRestaurant(restaurantData);
    };
    getData()
  }, [id])


  return (
    <>
      <Header />
      <S.Banner>
        <S.BannerImage />
        <S.Container className="container">
          <S.Category>{restaurant?.tipo}</S.Category>
          <S.RestaurantName>{restaurant?.titulo}</S.RestaurantName>
        </S.Container>
      </S.Banner>
      <CardList orientation="horizontal" />
    </>
  )
}

export default Details
