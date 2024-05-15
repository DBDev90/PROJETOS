import { useNavigate, useParams } from "react-router-dom";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";

export const DetalheDePessoa: React.FC = () => {
    const { id = "nova" } = useParams<"id">();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log('Save');
    }

    const handleDelete = () => {
        console.log('Delete');
    }

    return (
        <LayoutBaseDePagina
            titulo={id === "nova" ? "Nova Pessoa" : "Detalhe de Pessoa"}
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo="Nova"
                    mostrarBotaoSalvarFechar
                    mostrarBotaoApagar={id !== "nova"}
                    mostrarBotaoNovo={id !== "nova"}
                    aoClickarEmNovo={() => navigate("/pessoas/detalhe/nova")}
                    aoClickarEmSalvar={() => handleSave()}
                    aoClickarEmApagar={() => handleDelete()}
                    aoClickarEmVoltar={() => navigate("/pessoas")}
                    aoClickarEmSalvarFechar={() => handleSave()}
                />
            }
        ></LayoutBaseDePagina>
    );
};
