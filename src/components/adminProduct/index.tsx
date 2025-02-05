import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProductData } from "../../interfaces/ProductData"

interface ProductProps {
    products: ProductData[];
}

export const Products = ({ products }: ProductProps) => {

    return (
        <ProductElement>
            {products.map((product, index) => (
                <div className="product" key={index}>
                    <div className="image">
                        <Link to={"/productAdmin/" + product.id}>
                            <img src={"http://localhost:3000/uploads/" + product.image} alt="Imagem item" />
                        </Link>
                    </div>
                    <ProductInfo>
                        <h3>{product.name}</h3>
                        <p className="color">Cor: {product.colors.name}</p>
                        <p>Tamanho: {product.sizes.name}</p>
                        <div className="price-div">
                            <p className="price">R$ {product.price},00</p>
                        </div>
                        <div className="view-item-div">
                            <Link to={'/adminproduct' + product.id}><button className="view-item-btn">Visualizar Produto</button></Link>
                        </div>
                    </ProductInfo>
                </div>
            ))}
        </ProductElement>
    )
}

const ProductElement = styled.main`
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

    h3{
        word-break: break-all;
        height: 50px;
    }
    .color{
        margin: 0px 0 5px 0;
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
    
    .view-item-div{
        width: 100%;
    }

    .view-item-div .view-item-btn{
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