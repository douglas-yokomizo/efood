import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const FooterBg = styled.div`
  background-color: ${colors.beige};

  p {
    width: 480px;
    height: 24px;
    color:${colors.red};
    font-weight: ${fonts.text};
    font-size: 10px;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  flex-direction: column;
`

export const Socials = styled.ul`
  display: flex;
  margin: 32px 0 80px 0;
  column-gap: 8px;

  li {
    background-color: ${colors.red}
  }
`
