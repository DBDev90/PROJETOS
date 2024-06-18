import { Outlet } from "react-router-dom"
import { BodyContent, Container, Content, NavbarContent } from "./styles"
import { AuthMiddleware } from "../../middlewares/AuthMiddleware"
import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"

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