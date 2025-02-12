import styled from "styled-components"
import { Products } from "../adminProduct"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { useForm } from "react-hook-form";
import closeIcon from "../../assets/black-close-icon.png"
import { ProductData } from "@/interfaces/ProductData";

interface Data {
    name: string;
    image: string;
}


export const Admin = () => {
    const [ product, setProduct ] = useState<ProductData[]>([])
    const { register, handleSubmit, formState: { errors } } = useForm<Data>();
    const [updateEvent, setUpdateEvent] = useState<boolean>(false);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageFile(e.target.files[0]);
        }
    };

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/products');
            console.log(response.data)            
            setProduct(response.data)
          }
          
          fetchData();

    }, [])

    const handleSubmitForm = async (data: Data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);

            if (imageFile) {
                formData.append("file", imageFile);
            }

            const response = await api.post('/products', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            const newProduct: ProductData = {
                id: response.data.id, 
                name: response.data.name,
                image: response.data.image,
                price: response.data.price,
                description: response.data.description,
                highlight: response.data.highlight,
                sizes: response.data.sizes,
                colors: response.data.colors,
                created_at: response.data.created_at,
                updated_at: response.data.updated_at,
                categories: response.data.categories
            };

            // Atualiza a lista de produtos
            setProduct(prevProducts => [...prevProducts, newProduct]);
            setUpdateEvent(false); 
            setImageFile(null);  
        } catch (error) {
            console.log(error);
        }
    };

    const updateEvents = () => {
        setUpdateEvent(!updateEvent);
    }

    return (
        <Main>
            <ProductsSection className="products-section section">
                <h2 className="section-subtitle">Produtos</h2>
                <div className="products-grid grid-container">
                    <Products products={product}></Products>
                    <div className="add-item" onClick={updateEvents}>
                        <p>+</p>
                    </div>
                </div>
            </ProductsSection>
            {updateEvent &&
                    <Lightbox>
                        <div className="white-box">
                            <div className="close-container">
                                <h3>Adicionar Produto</h3>
                                <img src={closeIcon} alt="Close icon" onClick={() => setUpdateEvent(!updateEvent)} />
                            </div>
                            <label htmlFor="text">Título *</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Título"
                                maxLength={30}
                                {...register("name", { required: true })}
                            />
                            {errors.name && <ErrorMessage>é necessário escrever algo aqui</ErrorMessage>}

                            <label htmlFor="image">Imagem *</label>
                            <input
                                type="file"
                                id="image"
                                accept='image/*'
                                onChange={handleImageChange}
                            />
                            {errors.image && <ErrorMessage>é necessário fornecer uma imagem</ErrorMessage>}

                            <button type="submit" className="save-btn" onClick={handleSubmit(handleSubmitForm)}>Salvar alterações</button>
                        </div>
                    </Lightbox>
                }
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
        text-align: center;
    }
`

const ProductsSection = styled.section` 
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .products-grid .add-item{
        width: 300px;
        height: 400px;
        background-color: #f1f1f1;
        opacity: 0.8;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 60px;
        cursor: pointer;
        transition: 0.2s ease-in;
        &:hover{
            opacity: 1;
        }
        &:hover p{
            color: #000;
        }
    }

    .products-grid .add-item p{
        font-weight: 300;
        transition: 0.2s ease-in;
        color: #ccc;
    }
`
const Lightbox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    .white-box{
        background: white;
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 500px;
        padding: 20px;
        margin: 10px;   
    }
    .white-box .close-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .white-box .close-container img{
        width: 40px;
        cursor: pointer;
    }
    .white-box label{
        margin: 5px 0;
    }
    .white-box input, textarea{
        padding: 10px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #ccc;
        color: black;
    }
    .white-box .save-btn{
        margin-top: 20px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background: #ccc;
    }

    label, h3{
        color: black;
    }

`

const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
`
