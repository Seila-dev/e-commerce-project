import styled from "styled-components"
import { ProductData } from "@/interfaces/ProductData"
import { useContext, useState } from "react"
import { CartContext } from "@/contexts/CartContext"
import { Link } from "react-router-dom"
import closeIcon from "@/assets/white-close-icon.png"

interface ProductProps {
    products: ProductData[];
}

export const Product = ({ products }: ProductProps) => {
    const { addProductIntoCart } = useContext(CartContext)
    const [event, setEvent] = useState<boolean>(false);

    const handleAddItem = () => {
        if(event) return;
        setEvent(true);
        setTimeout(() => {
            setEvent(false);
        }, 3100);
    }

    return (
        <ProductsFlexContainer>
            <h2 className="products-subtitle">Produtos</h2>
            <ProductsGridContainer>
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <div className="image">
                            <Link to={"/product/" + product.id}>
                                <img src={"https://e-commerce-project-api-r1x4.onrender.com/uploads/" + product.image} alt="Imagem item" />
                            </Link>
                        </div>
                        <ProductInfo>
                            <h3>{product.name}</h3>
                            <p className="color">Cor: {product.colors.name}</p>
                            <p>Tamanho: {product.sizes.name}</p>
                            <div className="price-div">
                                <p className="price">R$ {product.price},00</p>
                            </div>
                            <div className="add-item-div">
                                <button onClick={() => { addProductIntoCart(product); handleAddItem(); }} className="add-to-cart" data-alert="0">Adicionar ao carrinho</button>
                            </div>
                        </ProductInfo>
                    </div>
                ))}
            </ProductsGridContainer>
            {event &&
                <div className="notification">
                    <div className="logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Sucesso" />
                    </div>
                    <div className="info">
                        <div className="text">
                            <h3>Novo Produto</h3>
                            <p>Produto adicionado com sucesso ao carrinho</p>
                        </div>
                        <div className="close-btn">
                            <img src={closeIcon} alt="close icon" />
                        </div>
                    </div>
                </div>
            }

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
    .notification{
        width: 300px;
        height: fit-content;
        position: fixed;
        display: flex;
        top: 100px;
        left: 50%;
        z-index: 10;
        border-radius: 10px;
        transform: translateX(-50%);
        background: var(--hover-purple);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        animation: fadeOut 400ms ease-out 3s;
    }
    .notification .logo{
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .notification .logo img{
        width: 35px;
    }
    .notification .info{
        border-radius: 0 10px 10px 0;
        display: flex;
        padding: 10px;
        font-size: 10px;
        background-color: var(--light-purple);
        height: 100%;
        width: 100%;
        color: #fff;
    }
    .notification .info .text{
        display: flex;
        flex-direction: column;
    }
    .notification h3{
        font-size: 14px;
    }
    .notification p{
        height: 100%;
        display: flex;
        margin-top: 10px;
    }
    .notification .close-btn{
        display: flex;
        align-items: center;
    }
    .notification .close-btn img{
        width: 30px;
        height: 30px;
        cursor: pointer;
        opacity: 0.8;
    }

    @keyframes fadeOut {
        100% {
            opacity: 0;
        }
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