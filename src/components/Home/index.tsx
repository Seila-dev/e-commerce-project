import styled from "styled-components";
import { Product } from "../product";
import { products } from "../../mocks";


export const Home = () => {


    return (
        <Main>
            <H2>Produtos</H2>
            <Product products={products}/>
        </Main>
    )
}

const Main = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px 400px;
    margin: 30px 0;
    @media(max-width: 1904px){
        padding: 30px 300px;
    }
    @media(max-width: 1688px){
        padding: 30px 200px;
    }
    @media(max-width: 1480px){
        padding: 30px 100px;
    }
    @media(max-width: 1280px){
        padding: 30px 0px;
    }
`

const H2 = styled.h2`
    margin: 0 0 20px 80px;
    width: 100%;
    @media (max-width: 536px){
        margin: 0;
        text-align: center;
    }
`