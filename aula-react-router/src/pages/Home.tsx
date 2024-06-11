import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <div>
            <h5>Essa é a página Home</h5>

            <div>
                <div>Ir para a página Sobre</div>

                <Link to="/about">Página sobre</Link>
                <br />
                <Link to="/products">Página produto</Link>
            </div>
        </div>
    );
}