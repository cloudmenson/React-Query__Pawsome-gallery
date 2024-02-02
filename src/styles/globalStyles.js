import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFFFFF;
    background-color: #5483B3;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Source Code Pro', monospace;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
