import { Card } from "../Card"
import { ListContainer } from "./styles"
import { Restaurant } from "../../models/Restaurant"


export type CardListProps = {
  orientation: string
  restaurants: Restaurant[]
}


const CardList = ({ orientation, restaurants }: CardListProps) => {
  return (
    <ListContainer orientation={orientation}>
      {restaurants.map(restaurant => (
        <Card title={restaurant.title} image={restaurant.image} description={restaurant.description} score={restaurant.score} spotlight={restaurant.spotlight} category={restaurant.category} key={restaurant.id} />
      ))}
    </ListContainer>
  )
}

export { CardList }
