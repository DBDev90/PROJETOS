import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { BodyContent, Container, Content, NavbarContent } from "./styles"
import { AuthMiddleware } from "../../middlewares/AuthMiddleware"
import { Navbar } from "./Navbar"

export const Layout = () => {
    return (
        <AuthMiddleware>
            <Container>
                <Sidebar />

                <Content>
                    <NavbarContent>
                        <Navbar />
                    </NavbarContent>

                    <BodyContent>
                        <Outlet />
                    </BodyContent>
                </Content>
            </Container>
        </AuthMiddleware>
    )
}