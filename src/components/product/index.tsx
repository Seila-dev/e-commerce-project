import styled from "styled-components"

export const Product = (props: any) => {

    return (
        <ProductContainer>
            <div className="image">
                <Image src={props.image} alt="Imagem item" />
            </div>
            <ProductInfo>
                <h3>{props.title}</h3>
                <p>Cor: {props.color}</p>
                <p>Tamanho: {props.size}</p>
                <div>
                    <p>R$ {props.price}</p>
                </div>
                <Button>Adicionar ao carrinho</Button>
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
    padding: 20px;
`

const Button = styled.button`
    background-color: var(--roxo-claro);
    color: #fff;
    padding: 12px 30px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: 0.1s ease-in-out;
    width: 100%;
    &:hover{
        background-color: var(--roxo-hover);
    }
`