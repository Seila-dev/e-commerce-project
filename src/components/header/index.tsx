import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png';
import WhiteMenuIcon from '../../assets/white-menu-icon.png';
import PersonIcon from '../../assets/person-icon.png'
import { MenuBurguer } from '../menuburguer';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const Header = () => {
    const { cart } = useContext(CartContext);
    const [ openMenu, setOpenMenu ] = useState<boolean>(false);
    const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0 )

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openMenu]);

    return (
        <>
        {openMenu && <Overlay onClick={toggleMenu} />}
            <HeaderElement>
                <div className="align-together">
                    <div className="menu-btn" onClick={toggleMenu}>
                        <img src={WhiteMenuIcon} alt="menu icon" />
                    </div>
                    <LinkLogo to="/">
                        <img src={Logo} alt="Logo" />
                    </LinkLogo>
                </div>
                <Nav>
                    <Ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/notfound">
                            <li>Sobre</li>
                        </Link>
                        <Link to="/">
                            <li>Produtos</li>
                        </Link>
                        <Link to="/notfound">
                            <li>Perguntas frequentes</li>
                        </Link>
                        <Link to="/notfound">
                            <li>Fale conosco</li>
                        </Link>
                    </Ul>
                    <LoginBtn to="/login">
                        Entrar ou cadastrar-se
                    </LoginBtn>
                    <UserLogin>
                        <Link to="/login">
                            <img src={PersonIcon} alt="person icon" />
                        </Link>
                    </UserLogin>
                    <div className="cart">
                        <Link to="/cart">
                            <img src={Cart} alt="Cart" />
                            {cart.length > 0 &&
                                <div><span className='products-quantity'>{totalCartItems}</span></div>
                            }
                        </Link>
                    </div>
                </Nav>
                <MenuBurguer active={openMenu} toggleMenu={toggleMenu} />
            </HeaderElement>
        </>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 4; 
    pointer-events: all; 
`

const HeaderElement = styled.header`
    display: flex;
    padding: 15px 10px;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid #6528D3;
    .align-together{
        display: flex;
        align-items: center;
        gap: 20px;
    }
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
    .menu-btn {
        display: none;
    }
    .menu-btn img{
        width: 30px;
        cursor: pointer;
    }

    @media(max-width: 1080px){
    justify-content: space-between;
    padding: 15px 30px;
        .menu-btn {
            display: flex;
        }
        nav ul{
            display: none;
        }
    }
`

const LinkLogo = styled(Link)`
    margin-right: 30px;

    @media(max-width: 768px){
        margin: 0;
        img{
            width: 100px;
        }
    }
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

const LoginBtn = styled(Link)`
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

    @media(max-width: 768px){
        display: none;
    }
`

const UserLogin = styled.div`
    border-right: 2px solid var(--light-purple);
    padding-right: 20px;
    display: none;
    img{
        width: 30px;
    }

    @media(max-width: 768px){
        display: flex;
    }
`