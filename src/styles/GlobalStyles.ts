import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        background: #111111;
        color: #ffffff;
        font-family: "Roboto", sans-serif;
    }

    a{
        color: #fff;
    }

    button {
        font-family: "Roboto", sans-serif;
    }
`