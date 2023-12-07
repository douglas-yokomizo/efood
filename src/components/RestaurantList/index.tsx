import { RestaurantCard } from "../Card"
import * as S from "./styles"
import { Restaurant } from "../../types/api"
import Loader from "../Loader"

export interface RestaurantListProps {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: RestaurantListProps) => {

  if (restaurants.length === 0) {
    return (
      <div style={{ display: "grid", placeItems: 'center' }} className="container">
        <Loader />
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
