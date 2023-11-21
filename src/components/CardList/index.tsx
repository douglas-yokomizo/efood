import { Card } from "../Card"
import * as S from "./styles"
import { Restaurant } from "../../types/api"
import { useState, useEffect } from "react"
import { fetchRestaurants } from "../../api"

export type CardListProps = {
  orientation: string
}

const CardList = ({ orientation }: CardListProps) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {

    const getData = () => {
      fetchRestaurants
        .then(res => setRestaurants(res))
    }

    getData()
  }, [])

  if (orientation === 'vertical') {
    if (restaurants.length === 0) {
      return (
        <S.ListContainer orientation='vertical' className="container">
          <h2>Nenhum restaurante encontrado</h2>
          <p>
            Tente novamente mais tarde ou pesquise por um restaurante específico.
          </p>
        </S.ListContainer>)
    }
    else {
      return (
        <S.ListContainer orientation='vertical' className="container">
          {restaurants.map(restaurant => (
            <Card title={restaurant.title} image={restaurant.cover} description={restaurant.description} score={restaurant.score} spotlight={restaurant.spotlight} category={restaurant.category} key={restaurant.id} type="restaurant" />
          ))}
        </S.ListContainer>
      )
    }
  }
}

export { CardList }
