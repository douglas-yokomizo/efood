import styled from "styled-components";
import { colors, fonts } from "../../styles";
import { ButtonStyled } from "../Button/styles";
import { Form } from "formik";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left:0;
  background-color: #000;
  opacity: .8;
  height: 100%;
  width: 100%;
`

export const AsideContainer = styled.div`
  position: fixed;
  top:0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ul {
    margin-bottom: 40px;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    color: ${colors.beige};
    font-weight: ${fonts.subHeading};
    margin-bottom: 16px;
    font-size: 14px;
  }


  ${ButtonStyled} {
    width: 100%;
    height: 24px;
    font-size: 14px;
  }
  `

export const CartItemContainer = styled.li`
  background-color: ${colors.beige};
  margin-bottom: 16px;
  padding: 8px 8px 12px 8px;
  position: relative;

  > img {
    position: absolute;
    right: 8px;
    bottom: 8px;
    height: 16px;
    width: 16px;
    object-fit: cover;
    cursor: pointer;
  }
  `

export const CartItem = styled.div`
  display:flex;
  color: ${colors.red};
  gap: 8px;

  h3 {
    margin-bottom: 16px;
    font-size: 18px
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  span {
    font-size: 14px;
  }
  `

export const FormsTitles = styled.h3`
  font-size: 16px;
  color: ${colors.beige};
  font-weight: ${fonts.subHeading};
  margin-bottom: 16px;
  `

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    gap: 34px;

    input {
      width: 50%;
    }
  }

  label {

    p {
      color: ${colors.beige};
      font-size: 14px;
      font-weight: ${fonts.subHeading};
      margin-bottom: 8px;
    }

    input {
      background-color: ${colors.beige};
      border: none;
      width: 100%;
      height: 32px;
      padding: 8px;

      &:focus {
        outline: none
      }
    }

    div {
      font-size: 14px;
      margin: 4px 0;
    }
  }
  `

  export const CardNumber = styled.div`
    gap: 30px;

    :first-child:label {
      width: 95%;
    }
  `
