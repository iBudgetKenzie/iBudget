import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaRegEdit } from "react-icons/fa";

import { BudgetContext } from "../../contexts/BudgetContext/index";
import { IBudgetOmitId } from "../../contexts/BudgetContext/index";

import {
  ContainerCreateBudget,
  ConteinerDate,
  ConteinerWorkTime,
} from "./styles";

export const CreateBudget = () => {
  const {
    setOnModalFixedCost,
    setOnModalVariableCost,
    fixedValue,
    variableValue,
    sendBudget,
    totalDays,
  } = useContext(BudgetContext);

  const formSchema = yup.object().shape({
    projectName: yup.string().required("Necessário nome do projeto"),
    fixedCost: yup.number().required("Custos fixos necessário"),
    variableValue: yup.number(),
    startDate: yup.string().required("Data de início necessária"),
    endDate: yup.string().required("Data de término necessária"),
    workHours: yup.number().required("Horas trabalhadas por dia necessária"),
  });

  // const [valueFixedCost, setValueFixedCost] = useState(0);
  // const [valueVariableCost, setValueVariableCost] = useState(0);

  // useEffect(() => {
  //   setValueFixedCost(fixedCost);
  //   setValueVariableCost(variableCost);
  // }, [fixedCost, variableCost])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBudgetOmitId>({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerCreateBudget>
      <h1>Preencha os dados</h1>
      <form onSubmit={handleSubmit(sendBudget)}>
        <label htmlFor="projectName">
          Nome do projeto: <span>*</span>
        </label>
        <input
          type="text"
          id="projectName"
          placeholder="Ex: Projeto1"
          {...register("projectName")}
        />
        <span>{errors.projectName?.message}</span>

        <label htmlFor="fixedCost">
          Custo fixo: <span>*</span>
        </label>
        <div>
          <input
            type="number"
            id="fixedCost"
            value={fixedValue}
            {...register("fixedCost")}
          />
          <FaRegEdit
            onClick={() => {
              setOnModalFixedCost(true);
            }}
          />
        </div>
        <span>{errors.fixedCost?.message}</span>

        <label htmlFor="variableCost">
          Custo variável: <span>*</span>
        </label>
        <div>
          <input
            type="number"
            id="variableCost"
            value={variableValue}
            {...register("variableCost")}
          />
          <FaRegEdit
            onClick={() => {
              setOnModalVariableCost(true);
            }}
          />
        </div>
        <span>{errors.variableCost?.message}</span>

        <ConteinerDate>
          <div>
            <label htmlFor="startDate">
              Data de início: <span>*</span>
            </label>
            <input
              type="date"
              id="startDate"
              placeholder="Ex: 15"
              {...register("startDate")}
            />
            <span>{errors.startDate?.message}</span>
          </div>

          <div>
            <label htmlFor="endDate">
              Data de término: <span>*</span>
            </label>
            <input
              type="date"
              id="endDate"
              placeholder="Ex: 15"
              {...register("endDate")}
            />
            <span>{errors.endDate?.message}</span>
          </div>
        </ConteinerDate>

        <ConteinerWorkTime>
          <div>
            <label htmlFor="workHours">
              Horas de trabalho: <span>*</span>
            </label>
            <input
              type="number"
              id="workHours"
              placeholder="Ex: 4h"
              {...register("workHours")}
            />
          </div>

          <div>
            <label>Valor por hora:</label>
            <input type="text" value={totalDays} disabled />
          </div>
        </ConteinerWorkTime>

        <button type="submit">Gerar Orçamento</button>
      </form>
    </ContainerCreateBudget>
  );
};
