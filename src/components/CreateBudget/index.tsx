import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaRegEdit } from "react-icons/fa";
import { useBudgetContext } from "../../contexts/BudgetContext/index";
import { ContainerCreateBudget } from "./styles";
import { Input } from "../Input";
import { IBudgetOmitId } from "../../contexts/BudgetContext/interfaces";
import { toast } from "react-toastify";

export const CreateBudget = () => {
  const {
    setOnModalFixedCost,
    setOnModalVariableCost,
    fixedValue,
    variableValue,
    sendBudget,
    totalDays,
  } = useBudgetContext();

  const formSchema = yup.object().shape({
    projectName: yup.string().required("Necessário nome do projeto"),
    fixedCost: yup.number().required("Custos fixos necessário"),
    variableValue: yup.number(),
    hoursDay: yup.number().required("Horas trabalhadas por dia necessária"),
    daysWeek: yup.number().required("Dias por semana necessária"),
    startDate: yup.string().required("Data de início necessária"),
    endDate: yup.string().required("Data de término necessária"),
    estimatedSalary: yup.number().typeError("O campo só aceita números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBudgetOmitId>({
    resolver: yupResolver(formSchema),
  });

  const onError = () => {
    toast.error("Dados do orçamento incorretos", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <ContainerCreateBudget>
      <h1>Preencha os dados</h1>
      <form onSubmit={handleSubmit(sendBudget, onError)}>
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

        <div>
          <div>
            <div>
              <Input
                title="Custo fixo:"
                type="number"
                id="fixedCost"
                value={fixedValue}
                register={register}
                error={errors.fixedCost?.message}
              />
              <FaRegEdit
                onClick={() => {
                  setOnModalFixedCost(true);
                }}
              />
            </div>

            <div>
              <Input
                title="Custo variável:"
                type="number"
                id="variableCost"
                value={variableValue}
                register={register}
                error={errors.variableCost?.message}
              />
              <FaRegEdit
                onClick={() => {
                  setOnModalVariableCost(true);
                }}
              />
            </div>
          </div>

          <div>
            <div>
              <Input
                title="Horas por dia:"
                type="number"
                id="hoursDay"
                placeholder="Ex: 10h"
                register={register}
                error={errors.hoursDay?.message}
              />
            </div>

            <div>
              <Input
                title="Dias por semana:"
                type="number"
                id="daysWeek"
                placeholder="Ex: 5 dias"
                register={register}
                error={errors.daysWeek?.message}
              />
            </div>
          </div>

          <div>
            <div>
              <Input
                title="Data de ínicio:"
                type="date"
                id="startDate"
                register={register}
                error={errors.startDate?.message}
              />
            </div>

            <div>
              <Input
                title="Data de término:"
                type="date"
                id="endDate"
                register={register}
                error={errors.endDate?.message}
              />
            </div>
          </div>

          <div>
            <div>
              <Input
                title="Salário estimado:"
                type="number"
                id="estimatedSalary"
                placeholder="Ex: R$: 3000.00"
                register={register}
                error={errors.estimatedSalary?.message}
              />
            </div>

            <div>
              <label>Valor por hora:</label>
              <input type="text" value={totalDays} disabled />
            </div>
          </div>
        </div>

        <button type="submit">Gerar Orçamento</button>
      </form>
    </ContainerCreateBudget>
  );
};
