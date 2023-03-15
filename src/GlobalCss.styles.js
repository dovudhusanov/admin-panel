import {createGlobalStyle} from "styled-components";

export const GlobalCssStyles = createGlobalStyle`

  #root {
    --darkGrey: #9D9FB1;
    --brightGrey: #F9FAFC;
    --lightGrey: #FAFBFD;
    --mainColor: ${localStorage.getItem("mainColor") || "#5D60EF"};
    --opacityViolet: #F4E8FF;
    --white: #ffffff;
    --black: #161D49;
    --box-white: #ffffff;
  }

  #root.dark {
    --darkGrey: #9D9FB1;
    --brightGrey: #F9FAFC;
    --lightGrey: #FAFBFD;
    --mainColor: ${localStorage.getItem("mainColor") || "#5D60EF"};
    --opacityViolet: #F4E8FF;
    --white: #1F1F27;
    --black: #ffffff;
    --box-white: #2a2d3a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #F5F5F5;
  }
  
  body.dark {
    background-color: #2a2d3a;
  }

  img {
    max-width: 100%;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }
`