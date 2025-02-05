import { Header } from "../components/adminHeader";
import { Outlet } from "react-router-dom";

export const AdminPage = () => {
    return (
        <> 
            <Header />
            <Outlet />
        </>
    )
}