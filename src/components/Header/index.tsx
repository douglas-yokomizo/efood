import { Logo } from '../Logo'
import { Cart, HeaderBg, HeaderContainer, Title } from './styles'

const Header = () => {
  return (
    <HeaderBg>
      <HeaderContainer className='container'>
        <Title>Restaurantes</Title>
        <Logo />
        <Cart>0 produtos(s) no carrinho</Cart>
      </HeaderContainer>
    </HeaderBg>
  )
}


export { Header }
