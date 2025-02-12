import styled from "styled-components";
import closeIcon from "@/assets/black-close-icon.png";

export const Notification = () => {
    return (
        <NotificationElement>
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Sucesso" />
            </div>
            <div className="info">
                <div className="text">
                    <h3>Novo Produto</h3>
                    <p>Produto adicionado com sucesso ao carrinho</p>
                </div>
                <div className="close-btn">
                    <img src={closeIcon} alt="close icon" />
                </div>
            </div>
        </NotificationElement>
    );
};

const NotificationElement = styled.div`
        width: 300px;
        height: fit-content;
        position: fixed;
        display: flex;
        top: 100px;
        left: 200px;
        z-index: 10;
        border-radius: 10px;
        transform: translateX(-50%);
        background: var(--hover-purple);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        animation: fadeOut 400ms ease-out 3s;
    .logo {
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .logo img {
        width: 35px;
    }
    .info {
        border-radius: 0 10px 10px 0;
        display: flex;
        padding: 10px;
        font-size: 10px;
        background-color: var(--light-purple);
        height: 100%;
        width: 100%;
        color: #fff;
    }
    .text {
        display: flex;
        flex-direction: column;
    }
    h3 {
        font-size: 14px;
    }
    p {
        height: 100%;
        display: flex;
        margin-top: 10px;
    }
    .close-btn {
        display: flex;
        align-items: center;
    }
    .close-btn img {
        width: 30px;
        height: 30px;
        cursor: pointer;
        opacity: 0.8;
    }
    @keyframes fadeOut {
        100% {
            opacity: 0;
        }
    }
`;