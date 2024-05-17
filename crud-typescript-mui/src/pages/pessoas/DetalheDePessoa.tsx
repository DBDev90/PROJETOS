import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { LinearProgress, TextField, Box, Paper, Grid } from "@mui/material";
import { useForm } from "react-hook-form";

type TDetalhePessoaProps = {
  nomeCompleto: string;
  email: string;
  cidadeId: number;
};

export const DetalheDePessoa: React.FC = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const { id = "nova" } = useParams<"id">();
  const [isLoading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<TDetalhePessoaProps>({
    mode: "onBlur"
  });

  const handleDelete = (id: number) => {
    if (window.confirm(`Confirma exclusão do registro ${nome}?`)) {
      PessoasService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert(`O registro ${nome} foi excluído com sucesso!`);
          navigate("/pessoas");
        }
      });
    }
  };

  const handleSave = (dados: TDetalhePessoaProps) => {
    setIsloading(true);

    if (id === "nova") {
      PessoasService.create(dados)
        .then((result) => {
          setIsloading(true);

          if (result instanceof Error) {
            alert(result.message);
          } else {
            navigate(`/pessoas/detalhe/${result}`);
          }
        });
    } else {
      PessoasService.updateById(Number(id), { id: Number(id), ...dados })
        .then((result) => {
          setIsloading(true);

          if (result instanceof Error) {
            alert(result.message);
          }
        });
    }
  };

  useEffect(() => {

    if (id !== "nova") {
      setIsloading(true);

      PessoasService.getById(Number(id)).then((result) => {
        setIsloading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate("/pessoas");
        } else {
          setNome(result.nomeCompleto);
          // formRef.current?.setData(result);
        }
      });
    } else {
      setFocus("nomeCompleto");
    }
  }, [id, navigate, setFocus]);

  return (
    <LayoutBaseDePagina
      titulo={id === "nova" ? "Nova Pessoa" : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarFechar
          mostrarBotaoApagar={id !== "nova"}
          mostrarBotaoNovo={id !== "nova"}
          aoClickarEmNovo={() => navigate("/pessoas/detalhe/nova")}
          aoClickarEmSalvar={handleSubmit(handleSave)}
          aoClickarEmApagar={() => handleDelete(Number(id))}
          aoClickarEmVoltar={() => navigate("/pessoas")}
          aoClickarEmSalvarFechar={handleSubmit(handleSave)}
        />
      }
    >


      <form>
        <Box component={Paper} marginX={1} variant="outlined" padding={1} display="flex" flexDirection="column">
          <Grid container spacing={1} direction="column">
            <Grid item>
              {isLoading && <LinearProgress variant="indeterminate" />}
            </Grid>
            <Grid container item direction="row" gap={1}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-required"
                  label="Nome Completo *"
                  type="text"
                  {...(register("nomeCompleto", { required: "Nome é obrigatório." }))}
                  error={!!errors.nomeCompleto}
                  helperText={errors.nomeCompleto?.message}
                  fullWidth
                  disabled={isLoading}
                  onChange={e => setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-required"
                  label="E-mail "
                  type="email"
                  {...(register("email", { required: "E-mail é obrigatório." }))}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
                  disabled={isLoading}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-required"
                  label="Cidade *"
                  type="text"
                  {...(register("cidadeId", { required: "Cidade é obrigatório." }))}
                  error={!!errors.cidadeId}
                  helperText={errors.cidadeId?.message}
                  fullWidth
                  disabled={isLoading}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>

    </LayoutBaseDePagina>
  );
};
