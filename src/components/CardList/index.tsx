import { Card } from "../Card"
import * as S from "./styles"
import { Restaurant } from "../../types/api"
import { useState, useEffect } from "react"

export interface CardListProps {
  orientation: string
}

const CardList = ({ orientation }: CardListProps) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    const getData = async () => {
      const restaurantData = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json());
      setRestaurants(restaurantData);
    };
    getData()
  }, [])

  if (orientation === 'vertical') {
    if (restaurants.length === 0) {
      return (
        <div style={{ display: "grid", placeItems: 'center' }} className="container">
          <h2>Carregando...</h2>
        </div>)
    }
    else {
      return (
        <S.ListContainer orientation='vertical' className="container">
          {restaurants.map(restaurant => (
            <Card titulo={restaurant.titulo} capa={restaurant.capa} descricao={restaurant.descricao} avaliacao={restaurant.avaliacao} destacado={restaurant.destacado} tipo={restaurant.tipo} key={restaurant.id} isrestaurant={true} />
          ))}
        </S.ListContainer>
      )
    }

  }
  if (orientation === 'horizontal') {
    return (
      <S.ListContainer orientation='horizontal' className="container">
        {restaurants.map(restaurant => restaurant.cardapio?.map(item => (
          <Card titulo={item.nome} capa={item.foto} descricao={item.descricao} id={item.id} isrestaurant={false} />
        )))}
      </S.ListContainer>
    )
  }
}

export { CardList }
