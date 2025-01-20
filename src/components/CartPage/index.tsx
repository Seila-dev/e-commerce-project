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
    const { cart, productCartDecrement, productCartIncrement, removeProductFromCart } = useContext(CartContext);

    console.log(cart)

    const productsFromCartPrice = () => {
        cart.map(item => {
            return item.price
        })
    }

    productsFromCartPrice()

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
                    <div>
                        <h1>Carrinho de compras</h1>
                    
                        <div className="inside-container">
                            <div>
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
                                                <div className="change-quantity">
                                                    <button className="cq-btn decrement" onClick={() => productCartDecrement(product)}>-</button>
                                                    <p className="quantity">{product.quantity}</p>
                                                    <button className="cq-btn increment" onClick={() => productCartIncrement(product)}>+</button>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="price second">R$ {product.price},00</p>
                                            </td>
                                            <td>
                                                <img src={Delete} alt="trash icon" className="trash-icon" onClick={() => removeProductFromCart(product)} />
                                            </td>
                                        </ProductItem>
                                ))}
                                </TableList>
                                <CupomSection>
                                    <div className="label-input">
                                        <label htmlFor="cupom">Cupom</label>
                                        <input
                                        type="text"
                                        name="cupom"
                                        id="cupom"
                                        placeholder="Digite o código"
                                        />
                                    </div>
                                    
                                    <button className="apply-cupom">Aplicar cupom</button>
                                </CupomSection>
                            </div>

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
                                <div className="purchase-price">
                                    <p>Subtotal dos pedidos: R$</p>
                                </div>
                            </form>
                            <button className="confirm-purchase">Finalizar compra</button>
                            </DeliveryContainer>
                        </div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px 0;
    position: relative;
    h1{
        margin-bottom: 30px;
        font-size: 25px;
    }
    .inside-container{
        display: flex;
        // justify-content: center;
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
    .change-quantity{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

    }
    .change-quantity .cq-btn{
        width: 30px;
        height: 30px;
        background: none;
        border: none;
        color: var(--white);
        font-size: 24px;
        font-weight: 400;
        cursor: pointer;
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
        width: 45px;
        height: 35px;
        border-radius: 4px;
        border: 1px solid var(--light-purple);
        text-align: center;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--dark-purple);
        color: white;
        font-weight: 500;
    }
    .price.second{
        color: var(--green);
        font-size: 18px;
    }
    .trash-icon{
        width: 25px;
        cursor: pointer;
    }
`

const CupomSection = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: flex-end;

    .label-input{
        display: flex;
        flex-direction: column;
    }
    label{
        margin-bottom: 5px;
    }
    input{
        padding: 10px;
        background: var(--dark-purple); 
        width: 300px;
        border: 1px solid var(--light-purple);
        color: white;
        border-radius: 4px;
        margin-right: 40px;
        outline: none;
    }
    input::placeholder{
        color: var(--light-purple);
    }
    .apply-cupom{
        background: var(--dark-purple);
        color: var(--white);
        padding: 10px 50px;
        border: 2px solid var(--light-purple);
        border-radius: 4px;
        cursor: pointer;
        transition: 0.1s ease-in-out;
        &:hover{
            background-color: var(--hover-purple);
        }
    }
`

const DeliveryContainer = styled.div`
    // background: orange;
    margin-left: 20px;
    flex-direction: column;
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
        input::placeholder{
            color: var(--light-purple);
        }
        select{
            cursor: pointer;
        }
        label{
            margin: 10px 0 3px 0;
        }
        .save-delivery-btn{
            background: var(--dark-purple);
            color: var(--white);
            padding: 10px;
            margin: 10px 0;
            width: 50%;
            border: 1px solid var(--light-purple);
            border-radius: 4px;
            cursor: pointer;
            transition: 0.1s ease-in-out;
            &:hover{
                background-color: var(--hover-purple);
            }
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
        transition: 0.1s ease-in-out;
        &:hover{
            background-color: var(--hover-purple);
        }
    }
`

const CepErrorMessage = styled.span`
    font-size: 12px;
    margin-top: 5px;
`