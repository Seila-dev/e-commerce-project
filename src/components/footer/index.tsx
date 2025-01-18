import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
    return (
        <>
        <FooterElement>
            <FlexContainer className="container">
                <div className="divs">
                    <h2>Institucional</h2>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/">
                            <li>Sobre</li>
                        </Link>
                        <Link to="/">
                            <li>Produtos</li>
                        </Link>
                        <Link to="/">
                            <li>Perguntas Frequentes</li>
                        </Link>
                        <Link to="/">
                            <li>Fale conosco</li>
                        </Link>
                    </ul>
                </div>
                <div className="divs second">
                    <h2>Ajuda</h2>
                    <ul>
                        <Link to="/">
                            <li>Trocas e devoluções</li>
                        </Link>
                        <Link to="/">
                            <li>Termos e condições</li>
                        </Link>
                        <Link to="/">
                            <li>Política de privacidade</li>
                        </Link>
                        <Link to="/">
                            <li>Padrão de qualidade</li>
                        </Link>
                    </ul>
                </div>
                <div className="divs">
                    <h2>Endereço</h2>
                    <ul>
                        <Link to="/">
                            <li>Rua Vale do Silício, 321</li>
                        </Link>
                        <Link to="/">
                            <li>São Francisco, Califórnia</li>
                        </Link>
                        <Link to="/">
                            <li>Estados Unidos da América</li>
                        </Link>
                        <Link to="/">
                            <li>(31) 1234.5678</li>
                        </Link>
                        <Link to="/">
                            <li>vendas@ecommercedd.com</li>
                        </Link>
                    </ul>
                </div>
            </FlexContainer>
            <CopyrightContainer>
                <p>@2025 - Todos os direitos reservados - Erick Rodrigues</p>
            </CopyrightContainer>
        </FooterElement>
        </>
    )
}

const FooterElement = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--dark-purple);
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px 0;

    .divs.second{
        margin: 0 200px;
    }
    li{
        margin: 10px 0;
        color: var(--light-purple);
        border-bottom: 1px solid var(--dark-purple);
        width: fit-content;
    }
    li: hover{
        border-bottom: 1px solid var(--light-purple);
    }

    ul a{
        width: fit-content;
        display: flex;
    }
    h2{
        font-size: 20px;
        margin-bottom: 10px;
    }

    @media(max-width: 1080px){
        .divs.second{
            margin: 0;
        }
        .divs{
            margin: 0 auto;
        }
    }

    @media(max-width: 580px){
        flex-direction: column;
        padding: 40px 20px 25px 20px;
        .divs{
            margin: 0;
        }
        .divs h2{
            margin-top: 10px;
        }
    }
`

const CopyrightContainer = styled.div`
    background: var(--light-purple);
    width: 100%;
    text-align: center;
    padding: 20px;
    font-size: 15px;
    font-weight: 300;
`