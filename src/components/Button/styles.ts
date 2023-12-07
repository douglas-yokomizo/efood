import {styled} from 'styled-components'
import { colors, fonts } from '../../styles'
import { ButtonProps } from '.'

export const ButtonStyled = styled.button<Omit<ButtonProps, 'onClick'>>`
  background-color: ${props => props.name === 'info' ? colors.red : colors.beige};
  cursor: pointer;
  width: ${props => props.name === 'info' ? '82px' : '304px'};
  height: 24px;
  border: none;
  font-weight: ${fonts.subHeading};
  font-size: 14px;
  color: ${props => props.name === 'info' ? colors.beige : colors.red};
  margin: ${props => props.first === 'first' ? '24px 0 8px 0' : ''};
  a {
    color: ${props => props.name === 'info' ? colors.beige : colors.red};
  }
`
