import styled from 'styled-components'
import { colors, fonts } from '../styles'
import headerBg from '../assets/images/headerBg.png'

export const HeaderBg = styled.header`
  background-image: url(${headerBg});
  height: 384px;
  `

export const Logo = styled.img`
  width: 125px;
  height:58px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
  padding: 64px 0 40px 0
`

export const Title = styled.h1`
  color: ${colors.vermelho};
  font-weight: ${fonts.heading};
  margin-top: 138px;
  width: 540px;
  height: 82px;
  font-size: 36px;
  text-align: center
`;
