import { Hero } from '../../components/Hero'
import { CardList } from '../../components/CardList'
import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import { Restaurant } from "../../models/Restaurant"

const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    score: 4.9,
    image: sushi,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    spotlight: 'true',
    category: 'Japonesa'

  },
  {
    id: 2,
    category: 'Italiana',
    spotlight: 'false',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: macarrao,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    category: 'Italiana',
    spotlight: 'false',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: macarrao,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    category: 'Italiana',
    spotlight: 'false',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: macarrao,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    category: 'Italiana',
    spotlight: 'false',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: macarrao,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    category: 'Italiana',
    spotlight: 'false',
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    image: macarrao,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]
const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <CardList orientation="vertical" restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
