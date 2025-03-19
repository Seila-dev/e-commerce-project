import styled from "styled-components"
import menuIcon from "@/assets/white-menu-icon.png"
import { useState } from "react"
import { AdmNavigationResponsive } from "../adminNavigationResponsive"

export const AdmHeader = () => {
    const [activeBurguer, setActiveBurguer] = useState<boolean>(true)

    const changeBurguerState = () => {
        setActiveBurguer(!activeBurguer)
    }

    return (
        <HeaderElement>

            <div className="header">
                <img src={menuIcon} alt="menu icon" className="menu-icon" onClick={changeBurguerState} />
                <h1>Dashboard</h1>
            </div>
            <AdmNavigationResponsive activeBurguer={activeBurguer} changeBurguerState={changeBurguerState}>
                </AdmNavigationResponsive>
            
        </HeaderElement>
    )
}

const HeaderElement = styled.header`
    display: flex;
    position: relative;
    .header{
        background: #292929;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        width: 100%;
        height: fit-content;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        z-index: 9;
        align-items: center;
    }
    .header h1{
        font-size: 15px;
        color: white;
        font-weight: 400;
    }
    .header .menu-icon{
        width: 30px;
        display: none;
        cursor: pointer;
    }

    @media(max-width: 550px){
        .header .menu-icon {
            display: flex;
        }
    }
`