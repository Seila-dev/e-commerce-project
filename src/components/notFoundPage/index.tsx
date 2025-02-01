import { Link } from "react-router-dom"
import styled from "styled-components"

export const NotFoundPage = () => {

    return (

        <NotFoundSection>  
            <h1>Página Não Encontrada</h1>
            <p>Talvez essa página esteja em desenvolvimento.. Ou apenas não existe.</p>
            <Link to="/" className="link">Voltar para o site principal</Link>
        </NotFoundSection>
    )
}

const NotFoundSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
    height: 100%;
    margin: 20px;

    p{
        margin: 5px 0 20px 0;
        opacity: 0.8;
        text-align: center;
    }

    .link{
        background: white;
        color: black;
        padding: 10px 20px;
        border-radius: 5px;
        transition: 0.1s ease-in;
    }
    .link:hover{
        background: #ccc;
    }
`