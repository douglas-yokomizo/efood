import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { ImInstagram } from "react-icons/im";
import { Logo } from '../Logo';
import * as S from './styles'

const Footer = () => {
  return (
    <>
      <S.FooterBg>
        <S.FooterContainer className='container'>
          <Logo />
          <S.Socials>
            <li>
              <a href="/"><ImInstagram /></a>
            </li>
            <li>
              <a href="/"><FaFacebookF /></a>
            </li>
            <li>
              <a href="/"><FaTwitter /></a>
            </li>
          </S.Socials>
          <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
        </S.FooterContainer>
      </S.FooterBg>
    </>
  )
}

export { Footer }
