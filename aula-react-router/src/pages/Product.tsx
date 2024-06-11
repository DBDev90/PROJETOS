import { useParams } from "react-router-dom";

export const Product = () => {
    const { productId, cateforyId } = useParams();

    return (
        <div>
            <h5>O id do produro é {productId}</h5>
            <h5>O id da categoria é {cateforyId}</h5>
        </div>
    );
}