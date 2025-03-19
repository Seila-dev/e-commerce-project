import logo from '@/assets/logo.png'
import homeLogo from '@/assets/home-icon.png'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import closeIcon from '@/assets/white-close-icon.png'
// import { useState } from 'react'

interface NavigationProps {
    activeBurguer: boolean;
    changeBurguerState: () => void;
}

export const AdmNavigationResponsive = ({ activeBurguer, changeBurguerState }: NavigationProps) => {

    //etapas
    //1: desabilitar o menu usando Transform após chegar em media 550px
    //2: habilitar o menu clicando no menu icon 

    const location = useLocation()
    

    return (
        <Aside activeBurguer={activeBurguer}>
                <div className="menu-header">
                    <img src={logo} alt="logo" className="logo" />
                    <Link to="/admin" className='home-link'>
                        <div className="home">
                            <img src={homeLogo} alt="Home logo" />
                        </div>
                    </Link>
                    <img src={closeIcon} alt="close icon" className='close-icon' onClick={changeBurguerState}/>
                </div>
                <nav className="flex-container">
                    <ul>
                        <Link to="/admin">
                        {/* <li
                            onClick={() => handleClick('/admin')}
                            className={activeItem === '/admin' ? 'active' : ''}
                        >
                            Dashboard
                        </li> */}
                        </Link> 
                        <Link to="/admin">
                        <li
                            className={location.pathname === '/admin' ? 'active' : ''}
                        >
                            Produtos
                        </li>
                        </Link> 
                        <Link to="/admin/categories">
                        <li
                            className={location.pathname === '/admin/categories' ? 'active' : ''}
                        >
                            Categorias
                        </li>
                        </Link> 
                        <Link to="/admin/colors">
                        <li
                            className={location.pathname === '/admin/colors' ? 'active' : ''}
                        >
                            Cores
                        </li>
                        </Link> 
                        <Link to="/admin/sizes">
                        <li
                            className={location.pathname === '/admin/sizes' ? 'active' : ''}
                        >
                            Tamanhos
                        </li>
                        </Link> 
                    </ul>
                </nav>
            </Aside>
    )
}

const Aside = styled.aside<{activeBurguer: boolean}>`
    background: var(--dark-purple);
    width: 250px;
    padding: 10px;
    display: none;
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: translateX(${props => (props.activeBurguer ? '-100%' : '0')});
    transition: 0.25s ease-out;
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
    .menu-header .close-icon {
        width: 25px;
        cursor: pointer;
        display: none;
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
        margin: 5px 0;
        &:hover{
            background: var(--light-purple);
        }
    }
    .flex-container ul li.active {
        background: var(--light-purple);
    }

    @media(max-width: 550px){
        // transform: translateX(-150%);
        position: absolute;
        width: 100%;
        display: flex;
        height: 100%;
        z-index: 10;
        transition: 0.25s ease-out;
        
        .menu-header .home-link {
            display: none;
        }
        .menu-header .close-icon {
            display: flex;
        }
    }
`