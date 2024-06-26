import { Box, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../contexts";
import { ReactNode } from "react";

interface ILayoutBaseDePaginaProps {
    titulo: string;
    barraDeFerramentas?: ReactNode;
    children?: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    const theme = useTheme();
    const { toggleDrawerOpen } = useDrawerContext()

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" padding={1} height={theme.spacing(smDown ? 2 : mdDown ? 4 : 8)} gap={1}>
                {smDown && (<IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </IconButton>)}

                <Typography variant={smDown ? "h6" : mdDown ? "h5" : "h4"} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                    {titulo}
                </Typography>
            </Box>
            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>)}
            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};