import { Header } from "../../components/Header"
import { Product } from "../../models/Product"
import { Banner, BannerImage, Category, Container, RestaurantName } from "./styles"
import pizza from '../../assets/images/pizza.png'
import { CardList } from "../../components/CardList"

const products: Product[] = [
  {
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
]

const Details = () => {
  return (
    <>
      <Header />
      <Banner>
        <BannerImage />
        <Container className="container">
          <Category>Italiana</Category>
          <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
        </Container>
      </Banner>
      <CardList orientation="horizontal" products={products} />
    </>
  )
}

export default Details
