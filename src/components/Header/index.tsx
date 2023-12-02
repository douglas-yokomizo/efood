import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { Logo } from '../Logo'
import * as S from './styles'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBg>
      <S.HeaderContainer className='container'>
        <S.Title>Restaurantes</S.Title>
        <Logo />
        <S.CartButton onClick={openCart}>
          {items.length} produtos(s) no carrinho
        </S.CartButton>
      </S.HeaderContainer>
    </S.HeaderBg>
  )
}


export { Header }
