import styled from "styled-components"
import imagemParaTeste from "@/assets/canecaalt.png"
import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <HeaderElement>
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
    }
`