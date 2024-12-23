import Logo from '../../assets/logo.png';
import Cart from '../../assets/cart.png'

// import { GenericButton } from '../button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const Header = () => {
    const { cart } = useContext(CartContext);
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(prevState => !prevState)
    }


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
                        <img src={Cart} alt="Cart" onClick={toggleCartVisibility} />
                        {cart.length > 0 &&
                            <div><span className='products-quantity'>{cart.length}</span></div>
                        }
                    </div>
                    <CartContainer isVisible={isCartVisible}>
                        {cart.length === 0 ? (
                            <p>Não há compras no carrinho</p>
                        ) : (
                            cart.map((product, index) => (
                                <div className="product" key={index}>
                                    <div className="image">
                                        <img src={product.image} alt="Imagem item" />
                                    </div>
                                    <div className='product-info'>
                                        <h3>{product.name}</h3>
                                        <p className="color">Cor: {product.color}</p>
                                        <p>Tamanho: {product.size}</p>
                                        <div className="price-div">
                                            <p className="price">R$ {product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                    </CartContainer>

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

const CartContainer = styled.div<{ isVisible: boolean }>`
position: absolute;
    top: 60px;
    right: 470px;
    z-index: 9999;
    background: var(--almost-black);
    display: flex;
    flex-direction: column;
    border: 1px solid var(--light-purple);
    border-radius: 5px;
    padding: 10px;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};
    transition: 0.15s ease-in-out;

    .product{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        img{
            width: 75px;
            border-radius: 5px;
        }
    }
    .product-info{
        display: flex;
        flex-direction: column;
        padding: 5px 10px;
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