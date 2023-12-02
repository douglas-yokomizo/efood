import { createGlobalStyle } from "styled-components";

export const colors = {
  red: '#E66767',
  beige: '#FFEBD9',
  white: '#FFFFFF',
  background: '#FFF8F2'
}

export const fonts = {
  heading: '900',
  subHeading: '700',
  text: '400',
  thin: '100',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '380'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none
  }

  body {
    background-color: ${colors.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
  }
`
