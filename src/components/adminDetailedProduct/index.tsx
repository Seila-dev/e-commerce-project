import { Link, useParams } from "react-router-dom"
import { ProductData } from "@/interfaces/ProductData"
import styled from "styled-components"
import { useEffect, useState } from "react"
import api from "@/services/api"
import arrow from '@/assets/arrow.png'

export const AdminDetailedProduct = () => {
    const { id } = useParams();
    const [ product, setProduct ] = useState<ProductData | undefined>();

    useEffect(() => {
        async function fetchAsync() {
            const productId = Number(id);
            const response = await api.get('/products');
            const allProducts: ProductData[] = response.data
            const detailedProduct = allProducts.find(product => product.id === productId)
            setProduct(detailedProduct)
        }
        fetchAsync()
    }, [id])

    if (!product) {
        return <ProductNotFound>Produto não encontrado</ProductNotFound>; 
    }

    return(

        <main>
            <RedirectHome>
                <Link to='/admin'>
                    <img src={arrow} alt="seta para voltar" />
                    <p>Voltar</p>
                </Link>
            </RedirectHome>
            <ProductInfoSection>
                <div className="image-prompt">
                    <img src={"https://e-commerce-project-api-r1x4.onrender.com/uploads/" + product.image} alt="imagem do produto" />
                </div>
                <div className="product-info">
                    <h2 className="name">{product.name}</h2>
                    {/* <p className="color"><strong>Cor:</strong> {product.colors.name}</p>
                    <p className="size"><strong>Tamanho:</strong> {product.sizes.name}</p> */}
                    <span className="price">R${product.price},00</span>
                    <p>{product.description}</p>
                    <div className="db-info">
                        <p className="datetime">Criado em: {product.createdAt}</p>
                        <p className="datetime">Atualizado em: {product.updatedAt}</p>
                        {/* <p className="highlight">Highlight: {product.highlight === true && <span>True</span>} {product.highlight === false && <span>False</span>}</p> */}
                        <p className="ean">ean: 24824247141 (em andamento)</p>
                        {/* <p className="category">Categoria: {product.categories.name}</p> */}
                    </div>
                </div>
            </ProductInfoSection>
            <ConfigurationButtons>
                <button className="edit-product conf-product-btn">Editar Produto</button>
                <button className="delete-product conf-product-btn">Deletar Produto</button>
            </ConfigurationButtons>

            
        </main>
      )
  }

const ProductNotFound = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    font-size: 25px;
`

const RedirectHome = styled.div`
    a{
        margin: 30px 0 0 100px;
        padding: 15px 50px;
        background: #ccc;
        cursor: pointer;
        width: fit-content;
        color: black;
        display: flex;
        align-items: center;
        border-radius: 5px;
        transition: 0.15s ease-in-out;
        &:hover{
            background: var(--gray-hover)
        }
    }
    
    img{
        transform: rotate(180deg);
        width: 40px;
        height: 100%;
    }
    
`

const ProductInfoSection = styled.section`
    padding: 50px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 3%;
    .image-prompt{
        width: 300px;
    }
    .image-prompt img{
        width: 100%;
        border-radius: 10px;
    }
    .product-info{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .product-info .name{
        font-weight: 500;
        font-size: 36px;
        word-break: break-all;
        margin-bottom: 10px;
        width: 100%;
    }
    .product-info .price{
        color: var(--green);
        font-size: 24px;
        margin: 15px 0;
    }

    .product-info .db-info{
        margin-top: 10px;
        line-height: 30px;
    }

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        .image-prompt{
            text-align: center;
            width: 100%;
        }
        .image-prompt img{
            width: 400px;
            
        }
        .product-info{
            margin-top: 30px;
            width: 100%;
        }
    }
    @media(max-width: 500px){
        .image-prompt img{
            width: 100%;
        }
        .product-info .name{
            font-size: 23px;
        }
    }
`

const ConfigurationButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .conf-product-btn{
        width: 480px;     
        background-color: var(--light-purple);
        color: #fff;
        padding: 15px 30px;
        margin: 0 50px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        transition: 0.1s ease-in-out;
        &:hover{
            background-color: var(--hover-purple);
        }
    }
`