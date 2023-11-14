import styled from 'styled-components'
import { colors, fonts } from '../../styles'
import heroBg from '../../assets/images/headerBg.png'

export const HeroBg = styled.div`
  background-image: url(${heroBg});
  height: 384px;
  margin-bottom: 80px;
  `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
  padding: 64px 0 40px 0
`

export const Title = styled.h1`
  color: ${colors.red};
  font-weight: ${fonts.heading};
  margin-top: 138px;
  width: 540px;
  height: 82px;
  font-size: 36px;
  text-align: center
`;
