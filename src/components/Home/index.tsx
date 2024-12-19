import styled from "styled-components";
import { Product } from "../product";
import RoupaPreta from '../../assets/roupapreta.png';
import RoupaRoxa from '../../assets/rouparoxa.png';
import Caneca from '../../assets/caneca.png';
import CanecaAlt from '../../assets/canecaalt.png';

export const Home = () => {
    return (
        <Main>
            <H2>Produtos</H2>
            <ProductsContainer>
                <Product image={RoupaRoxa} title="Camiseta Dev Em Dobro" color="roxa" size="M" price="89,00"/>
                <Product image={RoupaPreta} title="Camiseta Dev Em Dobro"  color="preta" size="M" price="89,00"/>
                <Product image={Caneca} title="Caneca Dev Em Dobro" color="roxa" size="único" price="29,00"/>
                <Product image={RoupaPreta} title="Camiseta Dev Em Dobro" color="preta" size="G" price="89,00"/>
                <Product image={CanecaAlt} title="Caneca Dev Em Dobro" color="preta" size="único" price="29,00"/>
                <Product image={RoupaRoxa} title="Camiseta Dev Em Dobro" color="roxa" size="P" price="89,00"/>
            </ProductsContainer>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px 400px;
    // margin: 50px 0;
    @media(max-width: 1904px){
        padding: 50px 300px;
    }
    @media(max-width: 1688px){
        padding: 50px 200px;
    }
    @media(max-width: 1480px){
        padding: 50px 100px;
    }
    @media(max-width: 1280px){
        padding: 50px 0px;
    }
`

const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const H2 = styled.h2`
    margin: 0 0 20px 40px;
    width: 100%;
`