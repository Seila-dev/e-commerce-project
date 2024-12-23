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
                <div className="divs">
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
                <p>@2024 - Todos os direitos reservados - Erick Rodrigues</p>
            </CopyrightContainer>
        </FooterElement>
        </>
    )
}

const FooterElement = styled.footer`
    display: flex;
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--dark-purple);
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 55%;
    padding: 40px 0;
    
    li{
        margin: 15px 0;
        color: var(--light-purple);
        border-bottom: 1px solid var(--dark-purple);
        width: fit-content;
    }
    li: hover{
        border-bottom: 1px solid var(--light-purple);
    }
    h2{
        font-size: 20px;
    }
`

const CopyrightContainer = styled.div`
    background: var(--light-purple);
    width: 100%;
    text-align: center;
    padding: 20px;
    font-size: 15px;
`