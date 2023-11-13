import {styled} from 'styled-components'
import { colors } from '../../styles'
import { ButtonProps } from '.'

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${props => props.name === 'info' ? colors.red : colors.beige};
  color: ${props => props.name === 'info' ? colors.beige : colors.red};
`
