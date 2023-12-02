import styled from "styled-components";
import { breakpoints } from "../../styles";

export const MenuListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}){
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`
