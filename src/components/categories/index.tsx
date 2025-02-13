import { AdmHeader } from "../adminHeader"
import styled from "styled-components"

export const CategoriesSection = () => {

    return (

        <Main>
            <AdmHeader />
            <h1>Categories Section</h1>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;    
`