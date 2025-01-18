import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import styled from "styled-components";
import Delete from '../../assets/delete.png';
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
    cep: string;
    country: string;
}

export const CartPage = () => {
    const { cart } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors }} = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData>  = (data) => {
        console.log(data)
        return data;
    }

    return (
        <>
            {cart.length === 0 ? (
                <CartNotFound>Não há compras no carrinho</CartNotFound>
            ) : (
                <Container>
                    <h1>Carrinho de compras</h1>
                    <div className="inside-container">
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
                                            <input type="number" className="quantity" value={1} />
                                        </td>
                                        <td>
                                            <p className="price second">R$ {product.price},00</p>
                                        </td>
                                        <td>
                                            <img src={Delete} alt="trash icon" className="trash-icon" />
                                        </td>
                                    </ProductItem>
                            ))}
                        </TableList>
                        <DeliveryContainer>
                            <form className="delivery-form" method="POST">
                            <p>Entrega</p>
                                <label htmlFor="cep">CEP</label>
                                <input
                                type="text"
                                id="cep"
                                placeholder="00000-000"
                                {...register('cep', {
                                    required: "Informe um cep válido",
                                    pattern: {
                                        value: /^\d{8}$/,
                                        message: "O CEP deve ter exatamente 8 dígitos."
                                    }
                                })}
                                />
                                {errors.cep && <CepErrorMessage>{errors.cep.message}</CepErrorMessage>}
                                <label htmlFor="country">País</label>
                                <select 
                                id="country"
                                {...register('country')}
                                >
                                    <option value="brasil">Brasil</option>
                                    <option value="usa">USA</option>
                                    <option value="uk">UK</option>
                                    <option value="argentina">Argentina</option>
                                </select>
                                <button type="submit" className="save-delivery-btn" onClick={handleSubmit(onSubmit)}>Atualizar entrega</button>
                            </form>
                            <button className="confirm-purchase">Finalizar compra</button>
                        </DeliveryContainer>
                    </div>
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
    padding: 50px 200px 400px 200px;
    h1{
        margin-bottom: 30px;
        font-size: 25px;
    }
    .inside-container{
        display: flex;
        justify-content: center;
    }
`

const TableList = styled.table`
    width: 800px;
    max-height: 150px;
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
    .price.second{
        color: var(--green);
        font-size: 18px;
    }
    .trash-icon{
        width: 25px;
    }
`

const DeliveryContainer = styled.div`
    // background: orange;
    flex-direction: column;
    padding: 10px;
    .delivery-form{
        background: var(--dark-purple);
        display: flex;
        padding: 10px;
        flex-direction: column;
        input, select{
            width: 300px;
            padding: 10px;
            border-radius: 2px;
            border: 1px solid var(--light-purple);
            outline: none;
            background: var(--dark-purple);
            color: var(--white);
        }
        label{
            margin-top: 10px;
        }
        .save-delivery-btn{
            background: var(--dark-purple);
            color: var(--white);
            padding: 10px;
            margin: 10px 0;
            width: 50%;
            border: 1px solid var(--light-purple);
        }
    }
    .confirm-purchase{
        margin-top: 30px;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: none;
        background: var(--light-purple);
        color: var(--white);
        cursor: pointer;
    }
`

const CepErrorMessage = styled.span`
    font-size: 12px;
    margin-top: 5px;
`