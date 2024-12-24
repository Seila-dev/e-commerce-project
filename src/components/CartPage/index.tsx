import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import styled from "styled-components";

export const CartPage = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            {cart.length === 0 ? (
                <CartNotFound>Não há compras no carrinho</CartNotFound>
            ) : (
                <Container>
                    <TableList>
                        <tr>
                            <th>Produto</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                        </tr>
                        {cart.map((product, index) => (
                                <ProductItem key={index}>
                                    <td>
                                        <img src={product.image} alt="Imagem item" className="image" />
                                    </td>
                                    <td>
                                        <h3 className="description">{product.name}</h3>
                                    </td>
                                    <td>
                                        <p className="price">R$ {product.price},00</p>
                                    </td>
                                    <td>
                                        <input type="tel" className="quantity" value={1} />
                                    </td>
                                    <td>
                                        <p className="price">R$ {product.price},00</p>
                                    </td>
                                    <td>emoji</td>
                                </ProductItem>
                        ))}
                    </TableList>
                </Container>



                // cart.map((product, index) => (
                //     <div className="product" key={index}>
                //         <div className="image">
                //             <img src={product.image} alt="Imagem item" />
                //         </div>
                //         <div className='product-info'>
                //             <h3>{product.name}</h3>
                //             <p className="color">Cor: {product.color}</p>
                //             <p>Tamanho: {product.size}</p>
                //             <div className="price-div">
                //                 <p className="price">R$ {product.price}</p>
                //             </div>
                //         </div>
                //     </div>
                // ))
            )}
        </>
    )
}

const CartNotFound = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    font-size: 25px;
`

const Container = styled.div`
    padding: 200px;
    
`

const TableList = styled.table`
    width: 800px;
    background: var(--light-purple);
    text-align: center;
    border-collapse: collapse;
    th, td {
        padding: 20px;
    }

    th {
        background: var(--light-purple);
    }

    td {
        background: var(--dark-purple);
    }
`

const ProductItem = styled.tr`
    .image{
        width: 80px;
    }
    .description{
        color: var(--light-purple);
    }
    .quantity{
        width: 30px;
        height: 30px;
    }
`