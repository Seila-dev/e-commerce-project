import styled from "styled-components";
import { ProductData } from "../../interfaces/ProductData";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface ProductProps {
    products: ProductData[];
}

export const Product = ({ products }: ProductProps) => {
    const { cart, addProductIntoCart } = useContext(CartContext)

    console.log(cart)


    return (
        <ProductContainer>
            {products.map((product, index) => (
                <div className="product" key={index}>
                    <div className="image">
                        <Image src={product.image} alt="Imagem item" />
                    </div>
                    <ProductInfo>
                        <h3>{product.name}</h3>
                        <p className="color">Cor: {product.color}</p>
                        <p>Tamanho: {product.size}</p>
                        <div className="price-div">
                            <p className="price">R$ {product.price}</p>
                        </div>
                        <div className="add-item-div">
                            <button onClick={() => addProductIntoCart(product)} className="add-to-cart">Adicionar ao carrinho</button>
                        </div>
                    </ProductInfo>
                </div>
            ))}
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    // padding: 50px 400px;
    // @media(max-width: 1904px){
    //     padding: 50px 300px;
    // }
    // @media(max-width: 1688px){
    //     padding: 50px 200px;
    // }
    // @media(max-width: 1480px){
    //     padding: 50px 100px;
    // }
    // @media(max-width: 1280px){
    //     padding: 50px 0px;
    // }
    .product{
        width: 340px;
        margin: 10px;
    }
    .image{
        background-color: var(--light-purple);
        border-radius: 20px 20px 0 0;
    }
        
`

const Image = styled.img`
    width: 100%;
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
`