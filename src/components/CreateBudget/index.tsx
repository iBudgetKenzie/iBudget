// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaRegEdit } from "react-icons/fa";
import { ContainerCreateBudget } from "./styles";

interface IBudget {
  projectName: string;
  projectTime: number;
  fixedCost: number;
  variableCost: number;
}

// interface IFixedCost {
//     value: number;
//     costDescription: string;
// };

export const CreateBudget = () => {
  const formSchema = yup.object().shape({
    projectName: yup.string().required("Necessário nome do projeto"),
    projectTime: yup.number().typeError("O campo só aceita números").required("Duração do projeto necessária"),
    fixedCost: yup.number().typeError("O campo só aceita números").required("Custos fixos necessário"),
    variableCost: yup.number().typeError("O campo só aceita números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBudget>({
    resolver: yupResolver(formSchema),
  });

  const sendBudget = (data: IBudget) => {
    const { fixedCost, projectTime, variableCost } = data;
    // const hourValue = (fixedCost + variableCost)/projectTime
    // console.log(hourValue)
  };

  return (
    <ContainerCreateBudget>
      <form onSubmit={handleSubmit(sendBudget)}>
        <label htmlFor="projectName">Nome do projeto: <span>*</span></label>
        <input
          type="text"
          id="projectName"
          placeholder="Ex: Projeto1"
          {...register("projectName")}
        />
        <span>{errors.projectName?.message}</span>

        <label htmlFor="projectTime">Tempo do projeto: <span>*</span></label>
        <input
          type="text"
          id="projectTime"
          placeholder="Ex: 15"
          {...register("projectTime")}
        />
        <span>{errors.projectTime?.message}</span>

        <label htmlFor="fixedCost">Custo fixo: <span>*</span></label>
        <div>
          <input
            type="text"
            id="fixedCost"
            placeholder="Ex: 2000,00R$"
            {...register("fixedCost")}
          />
          <FaRegEdit onClick={() => {}}/> 
        </div>
        <span>{errors.fixedCost?.message}</span>

        <label htmlFor="variableCost">Custo variável: <span>*</span></label>
        <div>
          <input
            type="text"
            id="variableCost"
            placeholder="Ex: 1000,00R$"
            {...register("variableCost")}
          />
          <FaRegEdit onClick={() => {}}/>
        </div>
        <span>{errors.variableCost?.message}</span>

        <button type="submit">Pré-visualizar</button>
      </form>
    </ContainerCreateBudget>
  );
};
