import {
    Box,
    Button,
    Divider,
    Icon,
    Paper,
    Skeleton,
    Theme,
    Typography,
    useMediaQuery,
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
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
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
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Salvar
                    </Typography>
                </Button>
            )}

            {mostrarBotaoSalvarCarregando && <Skeleton width={110} height={60} />}

            {mostrarBotaoSalvarFechar &&
                !mostrarBotaoSalvarFecharCarregando &&
                !smDown &&
                !mdDown && (
                    <Button
                        color="primary"
                        disableElevation
                        variant="outlined"
                        onClick={aoClickarEmSalvarFechar}
                        startIcon={<Icon>save</Icon>}
                    >
                        <Typography
                            variant="button"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                            overflow="hidden"
                        >
                            Salvar e fechar
                        </Typography>
                    </Button>
                )}

            {mostrarBotaoSalvarFecharCarregando && !smDown && (
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
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        Apagar
                    </Typography>
                </Button>
            )}

            {mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}

            {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClickarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}

            {mostrarBotaoNovoCarregando && !smDown && (
                <Skeleton width={110} height={60} />
            )}

            {mostrarBotaoVoltar &&
                (mostrarBotaoNovo ||
                    mostrarBotaoApagar ||
                    mostrarBotaoSalvar ||
                    mostrarBotaoSalvarFechar) && (
                    <Divider variant="middle" orientation="vertical" />
                )}

            {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
                <Button
                    color="primary"
                    disableElevation
                    variant="outlined"
                    onClick={aoClickarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}
                >
                    <Typography
                        variant="button"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                    >
                        voltar
                    </Typography>
                </Button>
            )}

            {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
        </Box>
    );
};
