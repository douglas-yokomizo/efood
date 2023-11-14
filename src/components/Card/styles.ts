import {styled} from 'styled-components'
import { colors, fonts } from '../../styles'
import { TagStyled } from '../Tag/styles'

export const CardContainer = styled.div`
  max-width: 472px;
  width: 100%;
  color:${colors.red};
  background-color: ${colors.white};
  border: 1px solid ${colors.red};
  border-top: none;
  position: relative;

    ${TagStyled} {
      position: absolute;
      right: 16px;
      top: 16px
    }
`

export const CardInfo = styled.div`
  padding: 8px;
`

export const Description = styled.p`
  margin-bottom: 16px;
  font-weight: ${fonts.text};
  font-size: 14px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: 15px;
  `

export const Score = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: ${fonts.subHeading};
  gap: 8px;
`
