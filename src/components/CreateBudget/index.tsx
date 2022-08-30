import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IBudget {
  projectName: string;
  projectTime: string;
  fixedCost: string;
  variableCost: string;
}

export const CreateBudget = () => {
  const formSchema = yup.object().shape({
    projectName: yup.string().required("Necessário nome do projeto"),
    projectTime: yup.number().required("Duração do projeto necessária"),
    fixedCost: yup.number().required("Custos fixos necessário"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBudget>({
    resolver: yupResolver(formSchema),
  });

  const sendBudget = (data: IBudget) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendBudget)}>
        <label htmlFor="projectName">Nome do projeto: *</label>
        <input
          type="text"
          id="projectName"
          placeholder="Ex: Projeto1"
          {...register("projectName")}
        />
        <span>{errors.projectName?.message}</span>

        <label htmlFor="projectTime">Tempo do projeto: *</label>
        <input
          type="text"
          id="projectTime"
          placeholder="Ex: 15"
          {...register("projectTime")}
        />
        <span>{errors.projectTime?.message}</span>

        <div>
          <label htmlFor="fixedCost">Custo fixo: *</label>
          <input
            type="text"
            id="fixedCost"
            placeholder="Ex: 2000,00R$"
            {...register("fixedCost")}
          />
          <span>{errors.fixedCost?.message}</span>

          <label htmlFor="variableCost">Custo variável: *</label>
          <input
            type="text"
            id="variableCost"
            placeholder="Ex: 1000,00R$"
            {...register("variableCost")}
          />
          <span>{errors.variableCost?.message}</span>
        </div>

        <button type="button">Pré-visualizar</button>
      </form>
    </div>
  );
};
