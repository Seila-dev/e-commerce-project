import styled from "styled-components"
import { GenericButton } from "../button"

export const Product = (props: any) => {

    return (
        <ProductContainer>
            <div className="image">
                <Image src={props.image} alt="Imagem item" />
            </div>
            <ProductInfo>
                <h3>{props.title}</h3>
                <p className="color">Cor: {props.color}</p>
                <p>Tamanho: {props.size}</p>
                <div className="price-div">
                    <p className="price">R$ {props.price}</p>
                </div>
                <div className="add-item-div">
                    <GenericButton>Adicionar ao carrinho</GenericButton>
                </div>
            </ProductInfo>
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
    width: 340px;
    margin: 10px;
    .image{
        background-color: var(--roxo-claro);
        border-radius: 20px 20px 0 0;
    }
`

const Image = styled.img`
    width: 100%;
`

const ProductInfo = styled.div`
    background-color: var(--roxo-escuro);
    padding: 30px 20px;
    .color{
        margin: 20px 0 5px 0;
    }
    .price-div {
        display: flex;
        justify-content: flex-end;
    }
    .price-div .price{
        margin: 30px 0 10px 0;
        font-size: 24px;
        color: var(--green);
        font-weight: 500;
    }
    
    .add-item-div{
        width: 100%;
        background: blue;
    }

    .add-item-div button{
        width: 100%;
        margin: 0;
    }
`