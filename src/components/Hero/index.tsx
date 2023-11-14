import { Logo } from '../Logo'
import { HeroBg, Container, Title } from './styles'

const Hero = () => (
  <>
    <HeroBg>
      <Container className='container'>
        <Logo />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </Container>
    </HeroBg>
  </>
)

export { Hero }
