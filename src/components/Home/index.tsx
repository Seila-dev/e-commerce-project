import styled from "styled-components"
import { Product } from "../product"
// import api from "@/services/api"
// import { useEffect, useState } from "react"
import { products } from "@/mocks"

// import { ProductData } from "@/interfaces/ProductData"

export const Home = () => {
    // const [ product, setProduct ] = useState<ProductData[]>([])

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await api.get('/products');
            
    //         setProduct(response.data)
    //       }
          
    //       fetchData();
    // }, [])


    return (
        <Main>
            <Product products={products}/>
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
`