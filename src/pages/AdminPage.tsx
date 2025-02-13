import { Outlet } from "react-router-dom"
import { AdmNavigation } from "@/components/adminNavigation"
import styled from "styled-components"

export const AdminPage = () => {
    return (
        <Page> 
            <AdmNavigation />
            <Outlet />
        </Page>
    )
}

const Page = styled.div`
    display: flex;
`