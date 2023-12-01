import { useParams } from "react-router-dom"

import { Header } from "../../components/Header"
import * as S from './styles'
import { MenuList } from "../../components/MenuList"
import { useGetRestaurantMenuQuery, useGetRestaurantDataQuery } from "../../services/api"


const Details = () => {
  const { id } = useParams();
  const { data: menu } = useGetRestaurantMenuQuery(id!)
  const { data: restaurant } = useGetRestaurantDataQuery(id!)

  const getTipo = (tipo: string) => {
    return tipo.charAt(0).toUpperCase() + tipo.slice(1)
  }


  if (!menu || !restaurant) {
    return (
      <>
        <Header />
        <h2 style={{ display: 'grid', placeItems: 'center', height: '400px' }}>Carregando...</h2>
      </>
    )
  }

  return (
    <>
      <Header />
      <S.Banner>
        <S.BannerImage style={{ backgroundImage: `url(${restaurant.capa})` }} />
        <S.Container className="container">
          <S.Category>{getTipo(restaurant.tipo as string)}</S.Category>
          <S.RestaurantName>{restaurant.titulo}</S.RestaurantName>
        </S.Container>
      </S.Banner>
      <MenuList items={menu} />
    </>
  )
}

export default Details
