import { AdmHeader } from "../adminHeader"
import styled from "styled-components"
import { ProductItems } from "../productItems"
import { useEffect, useState } from "react"
import { Category } from "@/interfaces/ProductData"
import api from "@/services/api"
import { Loading } from "../loading"
import { useForm } from "react-hook-form"
import closeIcon from '@/assets/close.png'
import { ErrorMessage } from "../errorMessage"

interface Data {
    id: number;
    name: string;
}

export const CategoriesSection = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Data>();
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [updateEvent, setUpdateEvent] = useState<boolean>(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/categories')
            setCategories(response.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const handleDelete = async (productId: number) => {
        try {
            setLoading(true)
            await api.delete(`/categories/${productId}`)
            setCategories(prev => prev.filter(item => item.id !== productId))
            setLoading(false)
        } catch (error) {
            console.log("Erro ao deletar o produto", error)
            setLoading(false)
        }
    }

    const handleEdit = (category: Category) => {
        setEditingCategory(category)
        setValue("name", category.name)
        setUpdateEvent(true)
    }

    const submitEdit = async (data: Data) => {
        if (editingCategory) {
            try {
                await api.put(`/categories/${editingCategory.id}`, { name: data.name })
                setCategories(prev => prev.map(item => item.id === editingCategory.id ? { ...item, name: data.name } : item))
                setUpdateEvent(false)
            } catch (error) {
                console.log("Erro ao enviar categoria", error)
            }
        }
    }

    if (loading) return <Loading>Carregando API.. Esse processo pode durar até 1 minuto</Loading>

    return (

        <Main>
            <AdmHeader />
            <div className="section">
                <div className="header">
                    <h1>Categories Section</h1>
                    <button className="create-item">Criar item</button>
                </div>
                <ProductItems item={categories} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
            {updateEvent &&
                <Lightbox onSubmit={handleSubmit(submitEdit)}>
                    <div className="white-box">
                        <div className="close-container">
                            <h3>Editar Item</h3>
                            <img src={closeIcon} alt="Close icon" onClick={() => setUpdateEvent(false)} />
                        </div>

                        <label htmlFor="text">Nome *</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nome"
                            maxLength={30}
                            {...register("name", { required: true })}
                        />
                        {errors.name && <ErrorMessage>é necessário escrever algo aqui</ErrorMessage>}
                        <button type="submit" className="save-btn">Salvar alterações</button>

                    </div>
                </Lightbox>
            }
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;    
    .section{
        padding: 20px;
    }
    .section h1{
        font-size: 25px;
        font-weight: 400;
    }
    .section .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .section .create-item{
        padding: 10px 45px;
        border-radius: 5px;
        border: none;
        background: var(--light-purple);
        color: white;
        cursor: pointer;
        transition: 0.15s ease-out;
        &:hover{
        background: var(--hover-purple);
    }
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