import styled from "styled-components"
import { Item } from "@/interfaces/ProductData";
import moreIcon from "@/assets/more-icon-black.png"
import { useState } from "react";
import deleteIcon from "@/assets/delete.png"
import editIcon from "@/assets/edit-icon.png"

interface ItemProps {
    item: Item[];
    onDelete: (id: number) => void;
    onEdit: (category: Item) => void;
}

export const ProductItems = ({ item, onDelete, onEdit }: ItemProps) => {
    const [ activeMenuId, setActiveMenuId ] = useState<number | null>(null)

    const updateMenu = (id: number) => {
        setActiveMenuId(activeMenuId === id ? null : id)
    }

    return (
        <ItemContainer>
            {
                item.map(element => (
                    <div className="item" key={element.id}>
                        <div className="info">
                            <h2 className="name">{element.name}</h2>
                            <p className="id"><i>ID: {element.id}</i></p>
                        </div>
                        <div className="other-info" onClick={() => updateMenu(element.id)}>
                            <img src={moreIcon} alt="more options icon" />
                        </div>
                        { activeMenuId === element.id &&
                            <Menu>
                                <div onClick={() => onDelete(element.id)}>
                                    <img src={deleteIcon} alt="delete icon" />
                                    <button className="delete-btn btn">Deletar</button>
                                </div>
                                <div onClick={() => onEdit(element)}>
                                    <img src={editIcon} alt="edit icon" />
                                    <button className="edit-btn btn">Editar</button>
                                </div>
                            </Menu>
                        }
                    </div>
                ))
            }
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;    
    .item{
        display: flex;
        background: var(--dark-purple);
        background: linear-gradient(90deg, #02244b 0%, #232631 40%);

        margin: 15px 15px 10px 0;
        justify-content: space-between;
        padding: 10px;
        width: 400px;
        border-radius: 5px;
        height: 100px;
        transition: 0.35s ease-in-out;
        position: relative;
    }
    .item .info .id{
        margin-top: 5px;
        font-size: 27px;
        border-bottom: 1px solid gray;
        width: fit-content;
    }
    .item .other-info{
        cursor: pointer;
        width: 30px;
        height: 30px;
        right: 10px;
        border-radius: 50%;
        padding: 2px;
        transition: 0.15s ease-in;
        &:hover{
            background: #ccc2;
        }
    }
    .item .other-info img{
        width: 100%;
    }
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 50px;
    background: #232631;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 5px 0 5px 5px;
    padding: 5px 0;
    div{
        cursor: pointer;
        display: flex;
        padding: 10px 15px;
        &:hover{
            background: #ccf2;
        }       
    }
    div img{
        width: 20px;
    }
    div .btn{
        margin-left: 10px;
        border: none;
        cursor: pointer;
        color: white;
        background: none;
    }
`