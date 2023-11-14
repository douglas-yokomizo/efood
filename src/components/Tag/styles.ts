import styled from "styled-components";
import { TagProps } from ".";
import { colors, fonts } from "../../styles";

export const TagStyled = styled.div`
  display: flex;
  column-gap: 8px;

  div {
    background-color: ${colors.red};
    color: ${colors.beige};
    font-weight: ${fonts.subHeading};
    padding: 6px 4px;
    font-size: 14px;
    text-align: center;
    height: 26px;
  }
`

export const TagSpotlight = styled.div<Omit<TagProps, 'category'>>`
  display: ${props => props.spotlight === 'false' ? 'none' : 'block'};
  `
