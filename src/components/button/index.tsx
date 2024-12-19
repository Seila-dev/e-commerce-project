import { ReactNode } from "react"
import styled from "styled-components"

interface buttonProps {
    children: ReactNode;
  }

export const GenericButton = (props: buttonProps) => {
    return (
        <ButtonElement>
            {props.children}
        </ButtonElement>
    )
}

const ButtonElement = styled.button`
    margin-left: 30px;
    background-color: var(--roxo-claro);
    color: #fff;
    padding: 12px 30px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: 0.1s ease-in-out;

    &:hover{
        background-color: var(--roxo-hover);
    }
`