import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png'

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const Header = () => {
    const { cart } = useContext(CartContext);

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
                    <LoginBtn>
                        Entrar ou cadastrar-se
                    </LoginBtn>
                    <div className="cart">
                        <Link to="/cart">
                            <img src={Cart} alt="Cart" />
                            {cart.length > 0 &&
                                <div><span className='products-quantity'>{cart.length}</span></div>
                            }
                        </Link>
                    </div>
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
    .cart {
    position: relative;
    margin-left: 20px;
        img{
            width: 25px;
            cursor: pointer;
        }
        div{
            background: var(--light-purple);
            border-radius: 50%;
            padding: 5px;
            width: 15px;
            height: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 15px;
            left: 15px;
        }
        .products-quantity{
            font-size: 10px;
        }
    }
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
    background-color: var(--light-purple);
    color: #fff;
    padding: 12px 30px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: 0.1s ease-in-out;
    &:hover{
        background-color: var(--hover-purple);
    }
`