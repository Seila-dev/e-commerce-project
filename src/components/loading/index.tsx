import { ReactNode } from "react"
import styled from "styled-components"

export const Loading = (props: { children?: ReactNode }) => {

    return (
        <LoadingElement>
            <p>{props.children}</p>
        </LoadingElement>
    )
}

const LoadingElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    font-size: 25px;
`