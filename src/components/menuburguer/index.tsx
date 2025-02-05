    import styled from "styled-components"
    import WhiteCloseIcon from "@/assets/white-close-icon.png"
    import { Link } from "react-router-dom"
    import Logo from "@/assets/logo.png"
    import Cart from "@/assets/cart.png"
    import { useContext } from "react"
    import { CartContext } from "@/contexts/CartContext"

    interface MenuBurguerProps {
        active: boolean;
        toggleMenu: () => void;
    }

    export const MenuBurguer = ({ active, toggleMenu }: MenuBurguerProps) => {
        const { cart } = useContext(CartContext);


        return (
            <MenuContainer active={active}>
                <div className="menu-header">
                    <img src={WhiteCloseIcon} alt="close icon" className="close-icon" onClick={toggleMenu} />
                    <img src={Logo} alt="logo da empresa" className="logo" />
                    <LoginBtn>
                        <Link to="/login">Entrar ou Cadastrar-se</Link>
                    </LoginBtn>
                    <Link to="/cart" className="cart">
                            <img src={Cart} alt="Cart" />
                            {cart.length > 0 &&
                                <div><span className='products-quantity'>{cart.length}</span></div>
                            }
                            <p>Carrinho de compras</p>
                    </Link>
                </div>
                <ul className="menu-nav">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/">
                        <li>Sobre</li>
                    </Link>
                    <div className="products-category">
                        <Link to="/">
                            <li>Produtos</li>
                        </Link>
                            <div>
                                <Link to="/">
                                    <p>Camisetas</p>
                                </Link>
                                <Link to="/">
                                    <p>Canecas</p>
                                </Link>
                                <Link to="/">
                                    <p>Moletom</p>
                                </Link>
                            </div>
                    </div>  

                    <Link to="/">
                        <li>Perguntas frequentes</li>
                    </Link>
                    <Link to="/">
                        <li>Fale conosco</li>
                    </Link>
                </ul>
            </MenuContainer>
        )
    }

    const MenuContainer = styled.div<{ active: boolean }>`
        display: flex;
        flex-direction: column;
        position: fixed;
        transition: 0.3s ease-in-out;
        transform: ${props => (props.active ? 'translateX(0%)' : 'translateX(-150%)')};
        z-index: 7;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--dark-purple);
        width: 300px;
        .menu-header{
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid var(--light-purple);
            padding: 20px;
        }
        .menu-header .logo{
            width: 170px;
            margin: 20px 0;
        }
        .menu-header .close-icon{
            width: 20px;
        }
        .cart{
            display: flex;
            align-items: center;
            gap: 20px;
            margin: 10px;
            font-size: 15px;
        }
        .cart img{
            width: 30px;
        }

        .menu-nav{
            padding: 20px;
        }
        .menu-nav li{
            margin: 15px 0;
            font-weight: 500;
        }
        .menu-nav .products-category{
            font-weight: 400;
        }
        .menu-nav .products-category p{
            margin: 10px 0 10px 30px;
            opacity: 0.9;
        }

        @media(max-width: 425px){
            width: 100%;
        }
    `

    const LoginBtn = styled.button`
        background-color: var(--light-purple);
        color: #fff;
        padding: 12px 30px;
        margin: 10px 0;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        width: 100%;
        height: 50px;
        font-size: 16px;
        transition: 0.1s ease-in-out;
        &:hover{
            background-color: var(--hover-purple);
        }

        @media(max-width: 425px){
            width: 300px;
        }
    `