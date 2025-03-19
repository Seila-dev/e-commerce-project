import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --light-purple: #6528D3;
        --dark-purple: #130234;
        --hover-purple: rgb(78, 32, 163);
        --green: #6BB27C;
        --almost-black: #111111;
        --white: #fff;
        --gray-hover: #6c6f67fc;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        background: var(--almost-black);
        color: #ffffff;
        font-family: "Roboto", sans-serif;
        min-width: 320px;
    }

    a{
        color: #fff;
    }

    button, textarea {
        font-family: "Roboto", sans-serif;
    }
`