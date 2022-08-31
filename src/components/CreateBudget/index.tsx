import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaRegEdit } from "react-icons/fa";

import { IBudget } from "../../contexts/UserContext/index";
import { BudgetContext } from "../../contexts/BudgetContext/index";

import { ContainerCreateBudget } from "./styles";

type IBudgetOmitId = Omit<IBudget, "id">

export const CreateBudget = () => {
  const { setOnModalFixedCost, setOnModalVariableCost, fixedCost, variableCost } = useContext(BudgetContext)

  const formSchema = yup.object().shape({
    projectName: yup.string().required("Necessário nome do projeto"),
    projectTime: yup.number().typeError("O campo só aceita números").required("Duração do projeto necessária"),
    fixedCost: yup.number().typeError("O campo só aceita números").required("Custos fixos necessário"),
    variableCost: yup.number().typeError("O campo só aceita números"),
  });

  // const [valueFixedCost, setValueFixedCost] = useState(0);
  // const [valueVariableCost, setValueVariableCost] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBudgetOmitId>({
    resolver: yupResolver(formSchema),
  });

  const sendBudget = (data: IBudgetOmitId) => {

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
            value={fixedCost}
            disabled
            placeholder="Ex: 2000,00R$"
            {...register("fixedCost")}
          />
          <FaRegEdit onClick={() => {setOnModalFixedCost(true)}}/> 
        </div>
        <span>{errors.fixedCost?.message}</span>

        <label htmlFor="variableCost">Custo variável: <span>*</span></label>
        <div>
          <input
            type="text"
            id="variableCost"
            value={variableCost}
            disabled
            placeholder="Ex: 1000,00R$"
            {...register("variableCost")}
          />
          <FaRegEdit onClick={() => {setOnModalVariableCost(true)}}/>
        </div>
        <span>{errors.variableCost?.message}</span>

        <button type="submit">Pré-visualizar</button>
      </form>
    </ContainerCreateBudget>
  );
};
