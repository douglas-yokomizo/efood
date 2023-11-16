import { Logo } from '../Logo'
import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderBg>
      <S.HeaderContainer className='container'>
        <S.Title>Restaurantes</S.Title>
        <Logo />
        <S.Cart>0 produtos(s) no carrinho</S.Cart>
      </S.HeaderContainer>
    </S.HeaderBg>
  )
}


export { Header }
