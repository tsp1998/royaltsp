import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;

    @media only screen and (max-width: 37.5em) {
      /* phone //600px */
      font-size: 30%;
    }
  }

  body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 300;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: #222;
  }
`