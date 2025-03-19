import styled from "styled-components"
import { Products } from "../adminProduct"
import api from "../../services/api"
import { useEffect, useState } from "react"
import { Category, Color, ProductData, Size } from "@/interfaces/ProductData"
import { AdmHeader } from "../adminHeader"
import closeIcon from '@/assets/white-close-icon.png'
import { useForm } from "react-hook-form"
import { ErrorMessage } from "../errorMessage"

interface Data {
    id: number;
    name: string;
    image: string;
    description: string;
    highlight: boolean;
    colorId: number;
    sizeId: number;
    categoryId: number;
    ean: string;
    price: number;
    discount?: number;
    rating?: number;
}

export const Admin = () => {
    const [product, setProduct] = useState<ProductData[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [colors, setColors] = useState<Color[]>([])
    const [sizes, setSizes] = useState<Size[]>([])
    const { register, handleSubmit, formState: { errors } } = useForm<Data>()
    const [updateEvent, setUpdateEvent] = useState<boolean>(false)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    // const [addEvent, setAddEvent] = useState<boolean>(false)
    // const [editing, setEditing] = useState<Data | null>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageFile(e.target.files[0]);
        }
    };

    useEffect(() => {
        /* eslint-disable */
        const fetchDataAPI = async (endpoint: string, setter: React.Dispatch<React.SetStateAction<any>>) => {
            try {
                const response = await api.get(endpoint);
                setter(response.data);
            } catch (error) {
                console.log(`Erro ao obter os dados de ${endpoint}`, error);
            } finally {
                setLoading(false);
            }
        };
        /* eslint-enable */

        fetchDataAPI('/products', setProduct)
        fetchDataAPI('/categories', setCategories)
        fetchDataAPI('/colors', setColors)
        fetchDataAPI('/sizes', setSizes)

        console.log('me cagei')

    }, [])

    const handleSubmitForm = async (data: Data) => {
        const formData = new FormData();
        
        try {
            setLoading(true)
            
            formData.append("name", data.name);
            formData.append("price", String(data.price));
            formData.append("description", data.description);
            formData.append("highlight", String(data.highlight)); 
            formData.append("ean", String(data.ean));
            formData.append("categoryId", String(data.categoryId));  
            formData.append("sizeId", String(data.sizeId));
            formData.append("colorId", String(data.colorId));
            formData.append("rating", String(data.rating))  
            formData.append("discount", String(data.discount))
            
            if (imageFile) {
                formData.append("file", imageFile);
            }

            const response = await api.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            const newProduct: ProductData = response.data

            setProduct(prevProducts => [...prevProducts, newProduct]);
            setUpdateEvent(false);
            setImageFile(null);
            setLoading(false)

            console.log(data)
        } catch (error) {
            console.log(error);
            console.log(formData)
            setLoading(false)
        }
        formData.forEach((value, key) => {
            console.log(key, value)
        })
    };

    const updateEvents = () => {
        setUpdateEvent(!updateEvent);
    }

    // const handleEdit = (data: Data) => {
    //     setEditing(data)
    //     setValue("name", data.name)
    //     setUpdateEvent(true)
    // }

    // const submitEdit = async (data: ProductData) => {
    //     if (editing) {
    //         try {
    //             const newProduct: ProductData = { 
    //                 id: data.id, 
    //                 name: data.name,
    //                 image: data.image, 
    //                 price: data.price, 
    //                 description: data.description, 
    //                 highlight: data.highlight, 
    //                 colors: data.colors, 
    //                 sizes: data.sizes, 
    //                 categories: data.categories, 
    //                 ean: data.ean,
    //                 created_at: data.created_at,
    //                 updated_at: data.updated_at 
    //             }
    //             await api.put(`/products/${editing.id}`, newProduct)


    //             // const newProduct: ProductData = {
    //             //     id: response.data.id, 
    //             //     name: response.data.name,
    //             //     image: response.data.image,
    //             //     price: response.data.price,
    //             //     description: response.data.description,
    //             //     highlight: response.data.highlight,
    //             //     sizes: response.data.sizes,
    //             //     colors: response.data.colors,
    //             //     created_at: response.data.created_at,
    //             //     updated_at: response.data.updated_at,
    //             //     categories: response.data.categories,
    //             //     ean: response.data.ean
    //             // };

    //             setProduct(prev => prev.map(item => item.id === editing.id ? { ...item, newProduct } : item))


    //             // Atualiza a lista de produtos
    //             setProduct(prevProducts => [...prevProducts, newProduct]);
    //             setUpdateEvent(false)
    //         } catch (error) {
    //             console.log("Error on sending the size", error)
    //         }
    //     }
    // }

    return (
        <Main>
            <AdmHeader />
            <div className="spacement">
                <Section>
                    <div className="header">
                        <input
                            type="text"
                            placeholder="Search"
                        />
                        <button className="add-product" onClick={updateEvents}>Criar Produto</button>
                    </div>
                    <div className="container">
                        <Products products={product} />
                    </div>
                </Section>
            </div>
            {(updateEvent) &&
                <Lightbox onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className="white-box">
                        <div className="close-container">
                            {/* <h3>{addEvent ? 'Criar item' : updateEvent ? 'Editar item ' : ''}</h3> */}
                            <h3>Criar item</h3>
                            {/* <img src={closeIcon} alt="Close icon" onClick={() => { setUpdateEvent(false); setAddEvent(false) }} /> */}
                            <img src={closeIcon} alt="Close icon" onClick={() => setUpdateEvent(false)} />
                        </div>

                        <div className="form" >
                            <div className="first-division division">
                                <label htmlFor="name">NOME *</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Nome do produto"
                                    maxLength={30}
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <ErrorMessage>é necessário escrever algo aqui</ErrorMessage>}
                                <label htmlFor="rating">Avaliação</label>
                                <input
                                    type="number"
                                    id="rating"
                                    placeholder="Avaliação do produto"
                                    maxLength={20}
                                    {...register("rating")}
                                />
                                {errors.rating && <ErrorMessage>É necessário ser um número</ErrorMessage>}
                                <label htmlFor="price">PREÇO *</label>
                                <input
                                    type="number"
                                    id="price"
                                    placeholder="Preço do produto"
                                    maxLength={20}
                                    {...register("price", { required: true })}
                                />
                                {errors.price && <ErrorMessage>é necessário colocar um preço aqui</ErrorMessage>}
                                <label htmlFor="highlight">Em Destaque</label>
                                <input
                                    type="checkbox"
                                    id="highlight"
                                    {...register("highlight")}
                                />
                                <label htmlFor="ean">Código EAN (European Article Number) *</label>
                                <input
                                    type="number"
                                    id="ean"
                                    placeholder="Código EAN do produto"
                                    maxLength={13}
                                    { ...register("ean", { required: true, pattern: /^[0-9]{13}$/ })}
                                />
                                {errors.ean && <ErrorMessage>é necessário colocar um código único aqui que contenha 13 números</ErrorMessage>}
                                <label htmlFor="discount">Desconto</label>
                                <input
                                    type="number"
                                    id="discount"
                                    placeholder="Desconto do produto"
                                    maxLength={20}
                                    {...register("discount")}
                                />
                            </div>
                            <div className="second-division division">
                                <label htmlFor="description">DESCRIÇÃO *</label>
                                <textarea
                                    id="description"
                                    placeholder="Descrição do produto"
                                    {...register("description", { required: true })}
                                />
                                {errors.description && <ErrorMessage>é necessário escrever algo aqui</ErrorMessage>}

                                <label htmlFor="category">Categoria *</label>
                                <select
                                    id="category"
                                    {...register("categoryId", {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled>Escolher</option>
                                    {categories.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                                {errors.categoryId && <ErrorMessage>é necessário escolher uma categoria</ErrorMessage>}
                                <label htmlFor="color">Cor *</label>
                                <select
                                    id="color"
                                    {...register("colorId", {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled>Escolher</option>
                                    {colors.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                                {errors.colorId && <ErrorMessage>é necessário escolher uma cor</ErrorMessage>}
                                <label htmlFor="size">Tamanho *</label>
                                <select
                                    id="size"
                                    {...register("sizeId", {
                                        required: true,
                                    })}
                                >
                                    <option value="" disabled>Escolher</option>
                                    {sizes.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                                {errors.sizeId && <ErrorMessage>é necessário escolher um tamanho</ErrorMessage>}
                                <label htmlFor="image">Imagem *</label>
                                <input
                                    type="file"
                                    id="image"
                                    accept='image/*'
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <div className="footer">
                            {/* <button className="cancel-btn btn" onClick={() => { setUpdateEvent(false); setAddEvent(false) }}>Cancelar</button> */}
                            <button className="cancel-btn btn" onClick={() => setUpdateEvent(false)}>Cancelar</button>
                            <button type="submit" className="save-btn btn" disabled={loading}>Salvar</button>
                        </div>
                    </div>
                </Lightbox>
            }
            {/* {updateEvent &&
                    <Lightbox>
                        <div className="white-box">
                            <div className="close-container">
                                <h3>Adicionar Produto</h3>
                                <img src={closeIcon} alt="Close icon" onClick={() => setUpdateEvent(!updateEvent)} />
                            </div>
                            <label htmlFor="name">Título *</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Nome"
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
                } */}
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    .spacement{
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
    }
`

const Section = styled.section`
    background: #292929;
    padding: 10px;
    border-radius: 5px;
    height: 580px;
    max-width: 800px;
    width: 100%;
    margin: 10px; 
    overflow-y: scroll; 
    overflow-x: scroll;
    &::-webkit-scrollbar {
        width: 10px;
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        cursor: pointer;
    }

    .header{
        margin-bottom: 30px;
        display: flex;
        gap: 20px;
        justify-content: flex-start;
        align-items: center;
    }
    .header input, .header button{
        padding: 5px 10px;
        border-radius: 2px;
        border: 1px solid var(--light-purple);
        background: var(--almost-black);
        outline: none;
        color: white;
    }
    .header button{
        cursor: pointer;
        background: var(--light-purple);
    }
    
    .container{
        max-width: 1400px;
        width: 100%;
    }

    @media (max-width: 950px){
        width: 100%;
        overflow-x: scroll;
        background: var(--almost-black);
    }
`

const Lightbox = styled.form`
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
        background: var(--almost-black);
        display: flex;
        flex-direction: column;
        width: fit-content;
        min-height: 500px;
        height: fit-content;
        padding: 20px;
        margin: 10px;
        border: 1px solid var(--light-purple);
        border-radius: 10px;
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
    .white-box .form {
        display: flex;
        gap: 20px;
    }
    .white-box .form .division{
        display: flex;
        flex-direction: column;
    }
    .white-box label{
        margin: 10px 0;
        font-weight: 700;
        font-size: 14px;
    }
    .white-box input, textarea, select{
        padding: 10px;
        outline: none;
        border-radius: 5px;
        background: black;
        width: 100%;
        border: 1px solid var(--light-purple);
        color: #ccc;
        resize: none;
        // margin-bottom: 10px;
    }
    .white-box select {
        cursor: pointer;
    }
    .white-box .footer{
        display: flex;
        justify-content: flex-end;
        margin-top: 20px    ;
    }    
    .white-box .btn{
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background: transparent;
        color: #fff;
        opacity: 0.8;
        transition: 0.15s ease-in;
    }
    .white-box .btn.save-btn{
        background: var(--light-purple);
        &:hover{
            background: var(--hover-purple);
        }
    }

    label, h3{
        color: #ccc;
    }

`
