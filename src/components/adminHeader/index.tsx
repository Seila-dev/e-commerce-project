import styled from "styled-components"
import imagemParaTeste from "@/assets/canecaalt.png"
import { Link } from "react-router-dom"
import arrow from '@/assets/arrow.png'

export const Header = () => {

    return (
        <HeaderElement>
            <div className="homepage">
                <Link to="/">
                    <img src={arrow} alt="seta para o lado" />
                    <span>Home</span>
                </Link>
            </div>
            <h1><Link to="/admin">Admin Painel</Link></h1>

            <div className="user-profile">
                <p className="user-name">Erick Rodrigues</p>
                <img src={imagemParaTeste} alt="user-image" />
            </div>
        </HeaderElement>
    )
}

const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 40px;
    max-height: 100%;
    border-bottom: 1px solid var(--light-purple);

    .homepage{
        background: #ccc;
        padding: 10px 15px;
        border-radius: 5px;
        transition: 0.15s ease-in;
        cursor: pointer;
  
        &:hover{
            background: var(--gray-hover);
        }
    }
    .homepage a{
        color: var(--almost-black);
        display: flex;
        align-items: center;  
    }
    .homepage a img{
        width: 30px;
        transform: rotate(180deg);
        height: 20px;
    }

    .user-profile{
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .user-profile img{
        margin-left: 20px;
        border-radius: 10px;
        width: 40px;
        height: 40px;
    }

    @media(max-width: 768px){
        padding: 10px;
        h1{
            font-size: 25px;
        }
        .user-profile .user-name{
            display: none;
        }
    }
`