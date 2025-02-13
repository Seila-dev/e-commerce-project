import styled from "styled-components"
import { AdmHeader } from "../adminHeader"

export const ColorsSection = () => {

    return (

        <Main>
            <AdmHeader />
            <h1>Colors Section</h1>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;    
`