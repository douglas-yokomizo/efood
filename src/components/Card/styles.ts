import {styled} from 'styled-components'
import { colors, fonts } from '../../styles'
import { TagStyled } from '../Tag/styles'
import { CardProps } from '.'
import { ButtonStyled } from '../Button/styles'

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
      cursor:pointer;
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
      margin-top: ${props => props.isrestaurant ? '-4px' : '4px'};
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
  margin-top: -4px;

  span {
    width: 26px;
    height: 21px;
  }
`

export const ModalContainer = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${colors.red};
  padding: 32px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    z-index: 1;
  }

  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background-color: rgba(0,0,0, .8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  color: ${colors.white};
  gap: 24px;
  font-weight: ${fonts.text};

  div {
    width: 656px;
    height: 176px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3{
      font-weight: ${fonts.heading};
      font-size: 18px;
    }

    p {
      font-size: 14px;
      line-height: 22px
    }

    ${ButtonStyled} {
      width: 218px;
      height: 24px;
      padding: 4px 8px;
    }
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
`

