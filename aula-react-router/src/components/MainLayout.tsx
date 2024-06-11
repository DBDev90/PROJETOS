import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            Meu layout
            <main style={{ background: "red" }}>
                <Outlet />
            </main>
        </div>
    );
}