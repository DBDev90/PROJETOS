import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { LinearProgress, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

type TDetalhePessoaProps = {
  name: string;
};

export const DetalheDePessoa: React.FC = () => {
  const { id = "nova" } = useParams<"id">();
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm<TDetalhePessoaProps>();

  const [isLoading, setIsloading] = useState(false);
  const [nome, setNome] = useState("");

  const handleSave = () => {
    console.log("Save");
  };

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
          console.log(result);
        }
      });
    }
  }, [id, navigate]);

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
          aoClickarEmSalvar={() => handleSave()}
          aoClickarEmApagar={() => handleDelete(Number(id))}
          aoClickarEmVoltar={() => navigate("/pessoas")}
          aoClickarEmSalvarFechar={() => handleSave()}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}

      <form
        onSubmit={handleSubmit((data: formvalues) => {
          console.log(data);
        })}
      >
        <TextField
          label="Nome Completo"
          type="text"
          {...(register("name"), { require: "Nome é obrigatório." })}
          error={!!errors.name}
          helpText={errors.name?.message}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </LayoutBaseDePagina>
  );
};
