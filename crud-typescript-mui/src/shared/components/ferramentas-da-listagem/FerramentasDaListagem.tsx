import {
    Box,
    Button,
    Icon,
    InputAdornment,
    Paper,
    TextField,
    useTheme,
} from "@mui/material";

interface IFerramentasDaListagemProps {
    textoBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoBusca?: (novoTexto: string) => void;

    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoBusca: aoMudarTextBusca,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    aoClicarEmNovo
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
            {mostrarInputBusca && (
                <TextField
                    size="small"
                    value={textoBusca}
                    placeholder="Pesquisar..."
                    onChange={(e) => aoMudarTextBusca?.(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon>search</Icon>
                            </InputAdornment>
                        ),
                    }}
                />
            )}
            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo && (
                    <Button
                        color="primary"
                        disableElevation
                        variant="contained"
                        onClick={aoClicarEmNovo}
                        endIcon={<Icon>add</Icon>}
                    >
                        {textoBotaoNovo}
                    </Button>
                )}
            </Box>
        </Box>
    );
};
