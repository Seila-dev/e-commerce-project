import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductData } from "@/interfaces/ProductData";
import editIcon from '@/assets/edit-icon.png'

interface ProductProps {
    products: ProductData[];
}

export const Products = ({ products }: ProductProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function transformPtbr(value: string){
        return new Date(`${value}`).toLocaleDateString("pt-BR")
    }

    return (
        <ProductElement>
            {windowWidth <= 950 ? (
                products.map((product, index) => (
                    <ProductResponsive key={index}>
                        <div className="product-header">
                            <img src={"https://e-commerce-project-api-r1x4.onrender.com/uploads/" + product.image}
                            alt="Imagem item" />
                            <div className="align">
                                <h3>{product.name}</h3>
                                <p>R${product.price},00</p>
                                <button>Editar</button>
                            </div>
                        </div>
                        {product.highlight === false && <p>Em Destaque: Não</p>}
                        {product.highlight === true && <p>Em Destaque: Sim</p>}
                        <p>Cor: <i>{product.colors.name}</i></p>
                        <p>Tamanho: <i>{product.sizes.name}</i></p>
                        <p>Categoria: <i>{product.categories.name}</i></p>
                        <p>Ean: <i>{product.ean}</i></p>
                        <p>Criado em: <i>{product.createdAt}</i></p>
                        <p>Avaliação: <i>{product.rating}/10</i></p>
                        <p>Desconto: <i>{product.discount}%</i></p>

                    </ProductResponsive>
                ))
            ) : (
                <>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Destaque</th>
                            <th>Cor</th>
                            <th>Tamanho</th>
                            <th>Categoria</th>
                            <th>Ean</th>
                            <th>Criado em</th>
                            <th>Avaliação</th>
                            <th>Desconto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <Product key={index}>
                                <td>
                                    <div className="image">
                                        <img
                                            src={"https://e-commerce-project-api-r1x4.onrender.com/uploads/" + product.image}
                                            alt="Imagem item"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <h3>{product.name}</h3>
                                </td>
                                <td>
                                    <p>R${product.price},00</p>
                                </td>
                                <td>
                                    {product.highlight === false && <p>Sim</p>}
                                    {product.highlight === true && <p>Não</p>}
                                </td>
                                <td>
                                    <p>{product.colors.name}</p>
                                </td>
                                <td>
                                    <p>{product.sizes.name}</p>
                                </td>
                                <td>
                                    <p>{product.categories.name}</p>
                                </td>
                                <td>
                                    <p>{product.ean}</p>
                                </td>
                                <td>
                                    <p>{transformPtbr(product.createdAt)}</p>
                                </td>
                                <td>
                                    <p>{product.rating}/10</p>
                                </td>
                                <td>
                                    <p>{product.discount}%</p>
                                </td>
                                <td>
                                <button className='edit-btn'><img src={editIcon} alt="Edit Icon" /></button>
                                </td>
                            </Product>
                        ))}
                    </tbody>
                </>
            )}
        </ProductElement>
    );
};

const ProductElement = styled.table`
    border-spacing: 0;
    th {
        padding: 5px 15px;
    }

    @media (max-width: 950px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

const Product = styled.tr`
    margin: 20px 0;
    cursor: pointer;
    width: 100%;
    transition: 0.15s ease-in-out;

    img {
        width: 70px;
    }
    td {
        text-align: center;
        padding: 5px 10px;   
        border-spacing: 0;
        font-style: italic;
    }
    h3 {
        font-size: 15px;
        font-weight: 400;
    }
    .edit-btn{
        border: none;
        width: 30px;
        height: 30px;
        padding: 3px;
        display: flex;
        background: var(--light-purple);
        color: #ccc;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
    }
    .edit-btn img{
        width: 100%;
    }
    &:hover{   
        background: var(--almost-black);
    }

    @media (max-width: 950px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

`;

const ProductResponsive = styled.div`
    display: flex;
    flex-direction: column;
    // background: #292929;
    background: linear-gradient(to bottom, #292929, var(--almost-black));
    margin: 10px;
    border-radius: 5px;
    padding: 15px;
    img{
        width: 100px;
    }
    .product-header{
        display: flex;
        gap: 15px;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
    }
    .product-header .align {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        width: 100%;
    }
    .product-header .align button{
        border: none;
        padding: 7.5px 80px;
        background: var(--light-purple);
        color: #ccc;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        width: fit-content;
    }
    p{
        margin: 10px 0;
    }
    @media(max-width: 400px) {
        .product-header .align button{
            width: 100%;
            padding: 5px 0;
        }
    }
`