import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png'

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
    return (
        <>
        <HeaderElement>
            <LinkLogo to="/">
                <img src={Logo} alt="Logo" />
            </LinkLogo>
            <Nav>
                <Ul>
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
                        <li>Perguntas frequentes</li>
                    </Link>
                    <Link to="/">
                        <li>Fale conosco</li>
                    </Link>
                </Ul>
                <LoginBtn>Entrar ou cadastrar-se</LoginBtn>
                <CartImage src={Cart} alt="Cart" />
            </Nav>
        </HeaderElement>
        </>
    )
}

const HeaderElement = styled.header`
    display: flex;
    padding: 15px 10px;
    justify-content: center;
    border-bottom: 1px solid #6528D3;
`

const LinkLogo = styled(Link)`
    margin-right: 50px;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
`

const Ul = styled.ul`
    display: flex;
    align-items: center;
    
    li{
        padding: 5px 10px;
        border-radius: 10px;
        transition: 0.05s ease-in;
    }
    li:hover{
        color: #ccc;
    }
    a{
        margin: 0 10px 0 5px;
    }
`

const LoginBtn = styled.button`
    margin-left: 30px;
    background-color: #6528D3;
    color: #fff;
    padding: 12px 30px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: 0.1s ease-in-out;
    &:hover{
        background-color:rgb(78, 32, 163);
    }
`

const CartImage = styled.img`
    width: 25px;
    cursor: pointer;
    margin-left: 20px;
`