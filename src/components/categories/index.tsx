import { AdmHeader } from "../adminHeader"
import styled from "styled-components"
import { ProductItems } from "../productItems"
import { useEffect, useState } from "react"
import { Category } from "@/interfaces/ProductData"
import api from "@/services/api"
import { Loading } from "../loading"
import { useForm } from "react-hook-form"
import closeIcon from '@/assets/white-close-icon.png'
import { ErrorMessage } from "../errorMessage"

interface Data {
    id: number;
    name: string;
}

export const CategoriesSection = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Data>()
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [updateEvent, setUpdateEvent] = useState<boolean>(false)
    const [addEvent, setAddEvent] = useState<boolean>(false)
    const [editing, setEditing] = useState<Category | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/categories')
            setCategories(response.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const handleCreate = async (data: Data) => {
        try {
            setLoading(true)
            const response = await api.post('/categories', { name: data.name })

            if (response && response.data) {
                setCategories(prev => [...prev, response.data])
                setAddEvent(false)
            } else {
                throw new Error("Dados inesperados da API")
            }

            setLoading(false)
        } catch (error) {
            console.log("Error on creating the item", error)
            setLoading(false)
        }
    }

    const handleDelete = async (productId: number) => {
        try {
            setLoading(true)
            await api.delete(`/categories/${productId}`)
            setCategories(prev => prev.filter(item => item.id !== productId))
            setLoading(false)
        } catch (error) {
            console.log("Erro on deleting the item", error)
            setLoading(false)
        }
    }

    const handleEdit = (category: Category) => {
        setEditing(category)
        setValue("name", category.name)
        setUpdateEvent(true)
    }

    const submitEdit = async (data: Data) => {
        if (editing) {
            try {
                await api.put(`/categories/${editing.id}`, { name: data.name })
                setCategories(prev => prev.map(item => item.id === editing.id ? { ...item, name: data.name } : item))
                setUpdateEvent(false)
            } catch (error) {
                console.log("Error on sending the category", error)
            }
        }
    }

    if (loading) return <Loading>Carregando API.. Esse processo pode durar até 1 minuto</Loading>

    return (

        <Main>
            <AdmHeader />
            <div className="section">
                <div className="header">
                    <h1>Category Section</h1>
                    <button className="create-item" onClick={() => setAddEvent(true)}>Criar item</button>
                </div>
                <ProductItems item={categories} onDelete={handleDelete} onEdit={handleEdit}/>
            </div>
            {(updateEvent || addEvent) &&
                <Lightbox onSubmit={handleSubmit(updateEvent ? submitEdit : handleCreate)}>
                    <div className="white-box">
                        <div className="close-container">
                            <h3>{addEvent ? 'Criar item' : updateEvent ? 'Editar item ' : ''}</h3>
                            <img src={closeIcon} alt="Close icon" onClick={() => {setUpdateEvent(false); setAddEvent(false)}} />
                        </div>

                        <label htmlFor="text">NOME *</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nome"
                            maxLength={30}
                            {...register("name", { required: true })}
                        />
                        {errors.name && <ErrorMessage>é necessário escrever algo aqui</ErrorMessage>}
                        <div className="footer">
                            <button className="cancel-btn btn" onClick={() => {setUpdateEvent(false); setAddEvent(false)}}>Cancelar</button>
                            <button type="submit" className="save-btn btn" disabled={loading}>Salvar</button>
                        </div>
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
        background: var(--almost-black);
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 500px;
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
    .white-box label{
        margin: 5px 0;
        font-weight: 700;
        font-size: 14px;
    }
    .white-box input, textarea{
        padding: 10px;
        outline: none;
        border-radius: 5px;
        background: black;
        border: 1px solid var(--light-purple);
        color: #ccc;
    }
    .white-box .footer{
        display: flex;
        justify-content: flex-end;
        margin-top: auto;
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