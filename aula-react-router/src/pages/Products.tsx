import { useNavigate } from "react-router-dom";

export const Products = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products/productId");
    }

    return (
        <div>
            <h5>Essa é a página de Produtos</h5>

            <button onClick={handleClick}>Ir para um produto</button>
        </div>
    );
};