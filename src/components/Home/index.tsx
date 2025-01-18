import styled from "styled-components";
import { Product } from "../product";
import { products } from "../../mocks";


export const Home = () => {


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


// const H2 = styled.h2`
//     @media (max-width: 536px){
//         margin: 0;
//         text-align: center;
//     }
// `