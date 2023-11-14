import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { ImInstagram } from "react-icons/im";

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
              <a href="/"><ImInstagram /></a>
            </li>
            <li>
              <a href="/"><FaFacebookF /></a>
            </li>
            <li>
              <a href="/"><FaTwitter /></a>
            </li>
          </Socials>
          <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
        </FooterContainer>
      </FooterBg>
    </>
  )
}

export { Footer }
