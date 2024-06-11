import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div>
            <strong>Página não encontrada.</strong>

            <Link to="/">Voltar para página inicial</Link>
        </div>
    );
}