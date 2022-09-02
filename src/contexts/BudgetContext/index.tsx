import { createContext, ReactNode, useState, useEffect, useContext } from "react";
// import { UserContext } from "../UserContext/index";

import { IBudget, IUser } from "../UserContext/index";
import { inputsBase, IInputs } from "../../components/InputsBase";

import iBudgetApi from "../../services/iBudgetApi";

export interface IBudgetOmitId {
  projectName: string;
  fixedCost: number;
  variableCost: number;
  startDate: string;
  endDate: string;
  daysWeek: number;
  estimatedSalary: number;
  hoursDay: number;
}

interface IBudgetProvider {
  children: ReactNode;
}

interface IBudgetContext {
  addFixedValue: (data: any) => void;
  addVariableValue: (data: any) => void;
  onModalFixedCost: boolean;
  onModalVariableCost: boolean;
  setOnModalFixedCost: (modalFixedValue: boolean) => void;
  setOnModalVariableCost: (modalVariableValue: boolean) => void;
  inputsBase: IInputs[];
  fixedValue: number;
  variableValue: number;
  sendBudget: (data: IBudgetOmitId) => void;
  totalDays: string;
  budgetHistory: IBudget[];
}

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext,
);

export interface IFixedCost {
  input0: IInputs;
  input1: IInputs;
  input2: IInputs;
  input3: IInputs;
  input4: IInputs;
  input5: IInputs;
  input6: IInputs;
  input7: IInputs;
}

export const BudgetProvider = ({ children }: IBudgetProvider) => {
  const [fixedValue, setFixedCost] = useState(0);
  const [variableValue, setVariableCost] = useState(0);
  
  const [totalDays, setTotalDays] = useState<string>("");

  const [onModalFixedCost, setOnModalFixedCost] = useState(false);
  const [onModalVariableCost, setOnModalVariableCost] = useState(false);

  const [budgetHistory, setBudgetHistory] = useState<IBudget[]>([])

  useEffect(() => {
    async function budgets() {
      const id = localStorage.getItem("@id")
      try {
        const {data} = await iBudgetApi.get<IUser>(`/users/${id}?_embed=budgets`);
        console.log(data.budgets)
      } catch (error) {
        
      }
    }
    budgets()
  }, [])

  const addFixedValue = (data: any): void => {
    const array = Object.values(data).filter((elemnt) => !!elemnt);
    const reduceArray = array.reduce(
      (acc: number, current) => acc + Number(current),
      0,
    );
    setFixedCost(reduceArray);
    setOnModalFixedCost(false);
  };

  const addVariableValue = (data: any): void => {
    const array = Object.values(data).filter((elemnt) => !!elemnt);
    const reduceArray = array.reduce(
      (acc: number, current) => acc + Number(current),
      0,
    );
    setVariableCost(reduceArray);
    setOnModalVariableCost(false);
  };

  const priceFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const sendBudget = (data: IBudgetOmitId): void => {
    const {
      fixedCost,
      variableCost,
      endDate,
      startDate,
      daysWeek,
      estimatedSalary,
      hoursDay,
      ...rest
    } = data;

    if (startDate < endDate) {
      const allValues = fixedValue + variableValue + estimatedSalary;
      const weekHours = hoursDay * daysWeek;
      const monthHours = weekHours * 4;
      const hoursCost = allValues / monthHours;

      setTotalDays(priceFormated.format(Math.floor(hoursCost)));

      const newEndDate = endDate.split("-");
      const yearEndDate = Number(newEndDate[0]);
      const mouthEndDate = Number(newEndDate[1]);
      const dayEndDate = Number(newEndDate[2]);
      const newStartDate = startDate.split("-");
      const yearStartDate = Number(newStartDate[0]);
      const mouthStartDate = Number(newStartDate[1]);
      const dayStartDate = Number(newStartDate[2]);

      const days =
        yearEndDate * 365 -
        yearStartDate * 365 +
        (mouthEndDate * 30 - mouthStartDate * 30) +
        (dayEndDate - dayStartDate);

      const deadLine = days * hoursDay;
      const finalBudget = hoursCost * deadLine;
      const id = localStorage.getItem("@id")

      const newData: IBudget = {
        fixedCost: fixedValue,
        variableCost: variableValue,
        projectTime: days,
        budget: priceFormated.format(finalBudget),
        userId: id,
        ...rest
      }

      iBudgetApi.post<IBudget>("/budgets").then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })

      console.log(newData)
    }
  };

  return (
    <BudgetContext.Provider
      value={{
        budgetHistory,
        totalDays,
        sendBudget,
        fixedValue,
        variableValue,
        inputsBase,
        onModalFixedCost,
        onModalVariableCost,
        setOnModalFixedCost,
        setOnModalVariableCost,
        addFixedValue,
        addVariableValue,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
