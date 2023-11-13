import logo from '../assets/images/logo.png'
import { HeaderBg, Container, Title, Logo } from './styles'
const Header = () => (
  <>
    <HeaderBg>
      <Container className='container'>
        <Logo src={logo} alt="eFood Logo" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </Container>
    </HeaderBg>
  </>
)

export { Header }
