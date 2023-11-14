import {styled} from 'styled-components'
import { colors, fonts } from '../../styles'
import { ButtonProps } from '.'

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${props => props.name === 'info' ? colors.red : colors.beige};
  color: ${props => props.name === 'info' ? colors.beige : colors.red};
  cursor: pointer;
  width: 82px;
  height: 24px;
  border: none;
  font-weight: ${fonts.subHeading};
  font-size: 14px
`
