import styled from "styled-components";
import { ProductData } from "../../interfaces/ProductData";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface ProductProps {
    products: ProductData[];
}

export const Product = ({ products }: ProductProps) => {
    const { addProductIntoCart } = useContext(CartContext)

    return (
        <ProductsFlexContainer>
            <h2 className="products-subtitle">Produtos</h2>
            <ProductsGridContainer>
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <div className="image">
                            <img src={product.image} alt="Imagem item" />
                        </div>
                        <ProductInfo>
                            <h3>{product.name}</h3>
                            <p className="color">Cor: {product.color}</p>
                            <p>Tamanho: {product.size}</p>
                            <div className="price-div">
                                <p className="price">R$ {product.price},00</p>
                            </div>
                            <div className="add-item-div">
                                <button onClick={() => addProductIntoCart(product)} className="add-to-cart">Adicionar ao carrinho</button>
                            </div>
                        </ProductInfo>
                    </div>
                ))}
            </ProductsGridContainer>
        </ProductsFlexContainer>
    )
}

const ProductsFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    .products-subtitle{
        margin: 15px 0 30px 0;
        font-weight: 400;
        font-size: 22px;
    }
`

const ProductsGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    gap: 20px;
    .product{
        width: 340px;
    }
    .image{
        background-color: var(--light-purple);
        border-radius: 20px 20px 0 0;
        height: 340px;
    }
    .image img{
        width: 100%;
        height: 100%;
    }
    
    @media(max-width: 1080px){
        .product{
            width: 240px;
        }
        .image{
            height: 240px;
        }
    }
    @media(max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 525px){
        grid-template-columns: 1fr;
        .product{
            width: 340px;
        }
        .image{
            height: 340px;
        }
    }
        
`



const ProductInfo = styled.div`
    background-color: var(--dark-purple);
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
    }

    .add-item-div .add-to-cart{
        width: 100%;
        margin: 0;        
        background-color: var(--light-purple);
        color: #fff;
        padding: 12px 30px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        transition: 0.1s ease-in-out;
        &:hover{
            background-color: var(--hover-purple);
        }
    }

    @media(max-width: 1080px){
        h3{
            font-size: 18px;
        }
    }
`