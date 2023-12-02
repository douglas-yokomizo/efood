import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.desktop}){
    grid-template-columns: 1fr;
  }
`
