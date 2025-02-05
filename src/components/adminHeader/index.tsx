import styled from "styled-components"
import imagemParaTeste from "../../assets/canecaalt.png"

export const Header = () => {

    return (
        <HeaderElement>
            <h1>Admin Painel</h1>
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

    .user-profile{
        display: flex;
        align-items: center;
    }
    .user-profile img{
        margin-left: 20px;
        border-radius: 10px;
        width: 40px;
        height: 40px;
    }
`