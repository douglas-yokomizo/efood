import { Header } from "../../components/Header"
import { Product } from "../../models/Product"
import pizza from '../../assets/images/pizza.png'
import { CardList } from "../../components/CardList"
import * as S from './styles'

const products: Product[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
]

const Details = () => {
  return (
    <>
      <Header />
      <S.Banner>
        <S.BannerImage />
        <S.Container className="container">
          <S.Category>Italiana</S.Category>
          <S.RestaurantName>La Dolce Vita Trattoria</S.RestaurantName>
        </S.Container>
      </S.Banner>
      <CardList orientation="horizontal" products={products} />
    </>
  )
}

export default Details
