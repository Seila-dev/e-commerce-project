import styled from "styled-components"
// import imagemParaTeste from "@/assets/canecaalt.png"

// import arrow from '@/assets/arrow.png'


export const AdmHeader = () => {

    return (
        <HeaderElement>

            <div className="header">
                <h1>Dashboard</h1>
                <button className="add-product">Criar Produto</button>
            </div>
            
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
    .header .add-product{
        border: none;
        padding: 5px 10px;
        background: var(--light-purple);
        color: white;
        cursor: pointer;
        border-radius: 2px;
    }
    
`