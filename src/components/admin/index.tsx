import styled from "styled-components"
import { Products } from "../adminProduct"
import { useEffect, useState } from "react"
import api from "../../services/api"

export const Admin = () => {
    const [ product, setProduct ] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/products');
            console.log(response.data)            
            setProduct(response.data)
          }
          
          fetchData();

    }, [])

    return (
        <Main>
            <ProductsSection className="products-section section">
                <h2 className="section-subtitle">Produtos</h2>
                <div className="products-grid grid-container">
                    <Products products={product}></Products>
                </div>
            </ProductsSection>

        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px 0;
    .section-subtitle{
        margin: 15px 0 30px 0;
        font-weight: 400;
        font-size: 22px;
    }
`

const ProductsSection = styled.section` 
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
