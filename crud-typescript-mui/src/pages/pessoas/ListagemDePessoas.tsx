import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDaListagem } from "../../shared/components";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";

export const ListagemDePessoas: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { debouce } = useDebounce()

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    useEffect(() => {
        debouce(() => {
            PessoasService.getAll(1, busca)
                .then((result) => {
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        console.log(result);
                    }
                })
        });
    }, [debouce, busca]);

    return (
        <LayoutBaseDePagina
            titulo="Lista de pessoas"
            barraDeFerramentas={
                <FerramentasDaListagem
                    textoBotaoNovo="Nova"
                    mostrarInputBusca
                    textoBusca={busca}
                    aoMudarTextoBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
                />
            }
        >

        </LayoutBaseDePagina>
    );
};
