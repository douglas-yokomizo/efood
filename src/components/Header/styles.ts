import styled from "styled-components";
import bg from '../../assets/images/headerBg.png'
import { colors, fonts } from "../../styles";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height:100%;
  color: ${colors.red};
  font-weight: ${fonts.heading};
  font-size: 18px;
  line-height: 21px;
  `

export const Title = styled.h2`
  margin-right: 340px;
  width: 108px;
  text-align: center;
  `

export const Cart = styled.h3`
  margin-left: 193px;
  width: 256px;
  text-align: right;
  `

export const HeaderBg = styled.div`
  background-image: url(${bg});
  height: 186px;
  `
