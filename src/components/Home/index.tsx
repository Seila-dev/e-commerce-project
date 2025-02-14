import styled from "styled-components"
import { Product } from "../product"
import api from "@/services/api"
import { useEffect, useState } from "react"
import { Loading } from "../loading"
import { ProductData } from "@/interfaces/ProductData"

export const Home = () => {
    const [ product, setProduct ] = useState<ProductData[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/products');
            
            setProduct(response.data)
            setLoading(false);
          }
          
          fetchData();
    }, [])

    if(loading) return <Loading>Carregando API.. Esse processo pode durar até 1 minuto</Loading>


    return (
        <Main>
            <Product products={product}/>
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