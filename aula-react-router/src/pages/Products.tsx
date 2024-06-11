import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [count, setCount] = useState(0);

    useEffect(() => {
        // setSearchParams({ count: String(count) });

        // searchParams.set("count", String(count));
        // setSearchParams(searchParams);

        console.log(searchParams.get("parametro-2"));
    }, [count, searchParams, setSearchParams]);

    const handleClickCount = () => setCount(count + 1);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products/productId");
    }

    return (
        <div>
            <h5>Essa é a página de Produtos</h5>

            <button onClick={handleClickCount} style={{ width: "100%" }}>Adicionar + 1</button>
            <br />
            <button onClick={handleClick} style={{ width: "100%" }}>Ir para um produto</button>
        </div>
    );
};