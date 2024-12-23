import { ReactNode} from "react"
import styled from "styled-components"
import { ProductData } from "../../interfaces/ProductData";

interface buttonProps {
    children: ReactNode;
    onClick: (product: ProductData) => void;
    product: ProductData; // Adicione o `product` aqui
}

export const GenericButton = (props: buttonProps) => {
    // const { onClick, children, product } = props;
    const { children } = props

    return (
        <ButtonElement >
            {children}
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