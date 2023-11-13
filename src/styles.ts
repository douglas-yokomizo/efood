import { createGlobalStyle } from "styled-components";

export const colors = {
  vermelho: '#E66767',
  bege: '#FFEBD9',
  branco: '#FFFFFF',
  background: '#FFF8F2'
}

export const fonts = {
  heading: '900',
  subHeading: '700',
  text: '400',
  thin: '100',
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif
  }

  body {
    background-color: ${colors.background}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
