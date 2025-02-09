import { useParams } from "react-router-dom"
import { ProductData } from "@/interfaces/ProductData"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
// import api from "@/services/api"
import { products } from "@/mocks"
import { Link } from "react-router-dom"
import { CartContext } from "@/contexts/CartContext"

export const DetailedProduct = () => {

    const { addProductIntoCart } = useContext(CartContext)

    const { id } = useParams();
    const [ product, setProduct ] = useState<ProductData | undefined>();
    const [ otherProducts, setOtherProducts ] = useState<ProductData[]>([]);

    useEffect(() => {
        async function fetchAsync() {
            const productId = Number(id);
            // const response = await api.get('/products');
            // const allProducts: ProductData[] = response.data
            const allProducts: ProductData[] = products
            const detailedProduct = allProducts.find(product => product.id === productId)
            setProduct(detailedProduct)
            const similarProducts = allProducts.slice(0, 4)
            setOtherProducts(similarProducts)
        }
        fetchAsync()
    }, [id])

    if (!product) {
        return <ProductNotFound>Produto não encontrado</ProductNotFound>; 
    }

    return(

        <main>
            <ProductInfoSection>
                <div className="image-prompt">
                    {/* <img src={"http://localhost:3000/uploads/" + product.image} alt="imagem do produto" /> */}
                    <img src={product.image} alt="imagem do produto" />
                </div>
                <div className="product-info">
                    <h2 className="name">{product.name}</h2>
                    <p className="color"><strong>Cor:</strong> {product.color}</p>
                    <p className="size"><strong>Tamanho:</strong> {product.sizes}</p>
                    <span className="price">R${product.price},00</span>
                    <p>{product.description}</p>
                    <button className="add-to-cart" onClick={() => addProductIntoCart(product)}>Adicionar ao carrinho</button>
                </div>
            </ProductInfoSection>
            <SimilarProducts>
                <div>
                    <h2>Produtos semelhantes</h2>
                    <div className="flex-container">
                    {otherProducts.map(otherProduct => (
                        // <Link to={'/product/' + otherProduct.id}><img key={otherProduct.id} src={"http://localhost:3000/uploads/" + otherProduct.image} alt="Camisa recomendada" /></Link>
                        <Link to={'/product/' + otherProduct.id}><img key={otherProduct.id} src={otherProduct.image} alt="Camisa recomendada" /></Link>
                    ))}
                    </div>
                </div>
                
            </SimilarProducts>
            
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

    .add-to-cart{
        margin-top: 30px;
        width: 280px;     
        background-color: var(--light-purple);
        color: #fff;
        padding: 15px 30px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        transition: 0.1s ease-in-out;
        &:hover{
            background-color: var(--hover-purple);
        }
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

const SimilarProducts = styled.section`
    margin: 0 0 60px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;

    .flex-container{
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .flex-container img {
        width: 100%;
        max-width: 250px;
    }

    @media(max-width: 1080px){
        .flex-container img {
            width: 11rem;
        }
    }
    @media(max-width: 768px){
        .flex-container img {
            width: 9rem;
        }
    }
    @media(max-width: 620px){
        .flex-container img {
            width: 7rem;
        }
    }
    @media(max-width: 540px){
        .flex-container{
            gap: 10px;
        }
        .flex-container img {
            width: 5.5rem;
        }
        h2{
            font-size: 20px;
        }
    }
    @media(max-width: 425px){
        .flex-container img {
            width: 5rem;
        }
    }
`;

