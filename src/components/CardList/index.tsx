import { Card } from "../Card"
import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import { ListContainer } from "./styles"

const products = [
  {
    title: 'Hioki Sushi',
    score: 4.9,
    image: `${sushi}`,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: `${macarrao}`,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: `${macarrao}`,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: `${macarrao}`,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: `${macarrao}`,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: `${macarrao}`,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
]

const CardList = () => {
  return (
    <ListContainer>
      {products.map(product => (
        <Card title={product.title} image={product.image} description={product.description} score={product.score} />
      ))}
    </ListContainer>
  )
}

export { CardList }
