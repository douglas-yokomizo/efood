import { RestaurantCard } from "../Card"
import * as S from "./styles"
import { Restaurant } from "../../types/api"

export interface RestaurantListProps {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: RestaurantListProps) => {

  if (restaurants.length === 0) {
    return (
      <div style={{ display: "grid", placeItems: 'center' }} className="container">
        <h2>Carregando...</h2>
      </div>)
  }
  else {
    return (
      <S.ListContainer className="container">
        {restaurants.map(restaurant => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </S.ListContainer>
    )
  }

}

export { RestaurantList }
