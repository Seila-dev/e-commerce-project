import styled from "styled-components"
import { Products } from "../adminProduct"
import api from "../../services/api"
import { useEffect, useState } from "react"
import { ProductData } from "@/interfaces/ProductData"
import { AdmHeader } from "../adminHeader"
// import { useForm } from "react-hook-form";

// interface Data {
//     name: string;
//     image: string;
//     description: string;
//     highlight: boolean;
//     color: number;
//     size: number;
//     category: number;
//     ean: string;
// }


export const Admin = () => {
    const [product, setProduct] = useState<ProductData[]>([])
    // const { register, handleSubmit, formState: { errors } } = useForm<Data>();
    // const [updateEvent, setUpdateEvent] = useState<boolean>(false);
    // const [imageFile, setImageFile] = useState<File | null>(null);

    // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setImageFile(e.target.files[0]);
    //     }
    // };

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/products');
            console.log(response.data)
            setProduct(response.data)
        }

        fetchData();

    }, [])

    // const handleSubmitForm = async (data: Data) => {
    //     try {
    //         const formData = new FormData();
    //         formData.append("name", data.name);

    //         if (imageFile) {
    //             formData.append("file", imageFile);
    //         }

    //         const response = await api.post('/products', formData, {
    //             headers: { 'Content-Type': 'multipart/form-data' }
    //         });

    //         const newProduct: ProductData = {
    //             id: response.data.id, 
    //             name: response.data.name,
    //             image: response.data.image,
    //             price: response.data.price,
    //             description: response.data.description,
    //             highlight: response.data.highlight,
    //             sizes: response.data.sizes,
    //             colors: response.data.colors,
    //             created_at: response.data.created_at,
    //             updated_at: response.data.updated_at,
    //             categories: response.data.categories
    //         };

    //         // Atualiza a lista de produtos
    //         setProduct(prevProducts => [...prevProducts, newProduct]);
    //         setUpdateEvent(false); 
    //         setImageFile(null);  
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const updateEvents = () => {
    //     setUpdateEvent(!updateEvent);
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
                        <button className="add-product">Criar Produto</button>
                    </div>
                    <div className="container">
                        <Products products={product} />
                    </div>
                </Section>
            </div>
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

    .header{
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
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

// const Lightbox = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: rgba(0, 0, 0, 0.5);
//     .white-box{
//         background: white;
//         display: flex;
//         flex-direction: column;
//         width: 500px;
//         height: 500px;
//         padding: 20px;
//         margin: 10px;
//     }
//     .white-box .close-container{
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//     }
//     .white-box .close-container img{
//         width: 40px;
//         cursor: pointer;
//     }
//     .white-box label{
//         margin: 5px 0;
//     }
//     .white-box input, textarea{
//         padding: 10px;
//         outline: none;
//         border-radius: 5px;
//         border: 1px solid #ccc;
//         color: black;
//     }
//     .white-box .save-btn{
//         margin-top: 20px;
//         padding: 10px;
//         border: none;
//         border-radius: 5px;
//         cursor: pointer;
//         background: #ccc;
//     }

//     label, h3{
//         color: black;
//     }

// `

// const ErrorMessage = styled.p`
//     color: red;
//     font-size: 12px;
// `
