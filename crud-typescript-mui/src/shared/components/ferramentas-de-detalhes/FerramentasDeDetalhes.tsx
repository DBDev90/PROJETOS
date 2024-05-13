import {
    Box,
    Button,
    Divider,
    Icon,
    Paper,
    Skeleton,
    useTheme,
} from "@mui/material";

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarFecharCarregando?: boolean;

    aoClickarEmNovo?: () => void;
    aoClickarEmVoltar?: () => void;
    aoClickarEmApagar?: () => void;
    aoClickarEmSalvar?: () => void;
    aoClickarEmSalvarFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = "Novo",

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarFecharCarregando = false,

    aoClickarEmNovo,
    aoClickarEmVoltar,
    aoClickarEmApagar,
    aoClickarEmSalvar,
    aoClickarEmSalvarFechar,
}) => {
    const theme = useTheme();

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            display="flex"
            component={Paper}
            alignItems="center"
            height={theme.spacing(5)}
        >
            {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
                <Button
                    color="primary"
                    disableElevation
                    variant="contained"
                    onClick={aoClickarEmSalvar}
                    startIcon={<Icon>save</Icon>}
                >
                    Salvar
                </Button>
            )}

            {mostrarBotaoSalvarCarregando && <Skeleton width={110} height={60} />}

            {mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClickarEmSalvarFechar}
                    startIcon={<Icon>save</Icon>}
                >
                    Salvar e fechar
                </Button>
            )}

            {mostrarBotaoSalvarFecharCarregando && (
                <Skeleton width={175} height={60} />
            )}

            {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClickarEmApagar}
                    startIcon={<Icon>delete</Icon>}
                >
                    Apagar
                </Button>
            )}

            {mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}

            {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClickarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    {textoBotaoNovo}
                </Button>
            )}

            {mostrarBotaoNovoCarregando && <Skeleton width={110} height={60} />}

            <Divider variant="middle" orientation="vertical" />

            {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClickarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}
                >
                    Voltar
                </Button>
            )}

            {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
        </Box>
    );
};
