import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarFechar?: boolean;

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

    aoClickarEmNovo,
    aoClickarEmVoltar,
    aoClickarEmApagar,
    aoClickarEmSalvar,
    aoClickarEmSalvarFechar
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
            {mostrarBotaoSalvar && (
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
            {mostrarBotaoSalvarFechar && (
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
            {mostrarBotaoApagar && (
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
            {mostrarBotaoNovo && (
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

            <Divider variant="middle" orientation="vertical" />

            {mostrarBotaoVoltar && (
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
        </Box>
    );
};
