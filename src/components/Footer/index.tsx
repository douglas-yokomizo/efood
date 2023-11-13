import logo from '../../assets/images/logo.png'
import { Logo } from '../Hero/styles'
import { FooterBg, FooterContainer, Socials } from './styles'

const Footer = () => {
  return (
    <>
      <FooterBg>
        <FooterContainer className='container'>
          <Logo src={logo} alt="efood logo" />
          <Socials>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </Socials>
          <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
        </FooterContainer>
      </FooterBg>
    </>
  )
}

export { Footer }
