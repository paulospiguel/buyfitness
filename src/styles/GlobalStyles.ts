import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

  :root {
    --color-background: #edf2f4;
    --color-primary: #00509d;
    --color-text: #073b4c;
    --color-secondary: #edf2f4;
    --color-border: #8d99ae;
    --color-danger: #ef233c;
    --color-blue: #118ab2;
    --color-white: #fff;
    --color-warning: #ffd166;
    --color-green: #06d6a0;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-background);
    color: var(--color-primary);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font-family: "Lato", sans-serif;
    font-size: 16px;
  }

  html {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

`;

export default GlobalStyled;
