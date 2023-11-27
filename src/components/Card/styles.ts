import {styled} from 'styled-components'
import { colors, fonts } from '../../styles'
import { TagStyled } from '../Tag/styles'
import { CardProps } from '.'

export const CardContainer = styled.div<CardProps>`
  max-width: ${props => props.isrestaurant ? '472px' : '320px'};
  width: 100%;
  color:${props => props.isrestaurant ? colors.red : colors.beige};
  background-color: ${props => props.isrestaurant ? colors.white: colors.red};
  border: ${props => props.isrestaurant && `1px solid ${colors.red}`};
  border-top: none;
  position: relative;
  padding: ${props => !props.isrestaurant && '8px'};
  width: ${props => !props.isrestaurant && '320px'};
  height: ${props => !props.isrestaurant && '338px'};

    ${TagStyled} {
      position: absolute;
      right: 16px;
      top: 16px
    }

    > img {
      width: ${props => props.isrestaurant ? '470px' : '304px'};
      height: ${props => props.isrestaurant ? '217px' : '168px'};
      object-fit: cover;
    }
`

export const CardInfo = styled.div<CardProps>`
  padding: ${props => props.isrestaurant && '8px'};
  display: ${props => !props.isrestaurant && 'flex'};
  flex-direction: ${props => !props.isrestaurant && 'column'};
  gap: ${props => !props.isrestaurant && '8px'};

    h3 {
      font-size: ${props => props.isrestaurant ? '18px' : '16px'};
      font-weight: ${props => props.isrestaurant ? `${fonts.subHeading}` : `${fonts.heading}`};
      margin-top: 4px;
    }
`

export const Description = styled.p<CardProps>`
  margin-bottom: ${props => props.isrestaurant && '16px'};
  font-weight: ${fonts.text};
  font-size: 14px;
  width: ${props => props.isrestaurant ? '456px' : '304px'};
  height: 88px;
  line-height: 22px;
`

export const CardHeader = styled.div<CardProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: ${props => props.isrestaurant ? '16px' : '0px'};
  `

export const Score = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: ${fonts.subHeading};
  gap: 8px;

`
