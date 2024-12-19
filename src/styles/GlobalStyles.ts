import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --roxo-claro: #6528D3;
        --roxo-escuro: #130234;
        --roxo-hover: rgb(78, 32, 163);
        --green: #6BB27C;
    }


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