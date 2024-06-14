import { Outlet } from "react-router-dom";
import { AuthMiddlewares } from "../../middlewares/AuthMiddlewares";
import { Navibar } from "./navbar";
import { Sidebar } from "./sidebar";
import { BodyContent, Container, Content, NavbarContent } from "./styles";

export const Layout = () => {
    return (
        <AuthMiddlewares>
            <Container>
                <Sidebar />
                <Content>
                    <NavbarContent>
                        <Navibar />
                    </NavbarContent>
                    <BodyContent>
                        <Outlet />
                    </BodyContent>
                </Content>
            </Container>
        </AuthMiddlewares>
    );
}