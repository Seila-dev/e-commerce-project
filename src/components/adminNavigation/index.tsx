import logo from '@/assets/logo.png'
import homeLogo from '@/assets/home-icon.png'
import { Link } from "react-router-dom"
import styled from 'styled-components'

export const AdmNavigation = () => {

    return (
        <Aside>
                <div className="menu-header">
                    <img src={logo} alt="logo" className="logo" />
                    <Link to="/admin">
                        <div className="home">
                            <img src={homeLogo} alt="Home logo" />
                        </div>
                    </Link>
                </div>
                <nav className="flex-container">
                    <ul>
                        <li>Dashboard</li>
                        <li>Produtos</li>
                        <li>Categorias</li>
                        <li>Cores</li>
                        <li>Tamanhos</li>
                    </ul>
                </nav>
            </Aside>
    )
}

const Aside = styled.aside`
    background: black;
    width: 250px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    .menu-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid white;
        padding-bottom: 10px;
    }
    .menu-header img{
        width: 80px;
    }
    .menu-header .home {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        padding: 5px;
        background: var(--light-purple);
    }
    .menu-header .home img {
        width: 100%;
    }
    .flex-container ul {
        margin: 10px 0;
    }
    .flex-container ul li{
        padding: 10px 5px;
        transition: 0.15s ease-in;
        cursor: pointer;
        border-radius: 5px;
        &:hover{
            background: #686e6c;
        }
    }
`