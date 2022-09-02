import { createContext, ReactNode, useState, useEffect } from "react";

import { IBudget } from "../UserContext/index";

export interface IBudgetOmitId {
  projectName: string;
  fixedCost: number;
  variableCost: number;
  startDate: string;
  endDate: string;
  workHours: number;
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
  inputs: IInputs[];
  fixedValue: number;
  variableValue: number;
  sendBudget: (data: IBudgetOmitId) => void;
  totalDays: number;
}

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext,
);

export interface IInputs {
  title: string;
  example: string;
  name: string;
}

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
  const [inputs] = useState<IInputs[]>([
    {
      title: "Moradia:",
      example: "Ex: 1000",
      name: "option0",
    },
    {
      title: "Alimentação:",
      example: "Ex: 1000",
      name: "option1",
    },
    {
      title: "Consumo:",
      example: "Ex: 1000",
      name: "option2",
    },
    {
      title: "Saúde:",
      example: "Ex: 1000",
      name: "option3",
    },
    {
      title: "Transporte:",
      example: "Ex: 1000",
      name: "option4",
    },
    {
      title: "Educação:",
      example: "Ex: 1000",
      name: "option5",
    },
    {
      title: "Outros:",
      example: "Ex: 1000",
      name: "option6",
    },
    {
      title: "Outros:",
      example: "Ex: 1000",
      name: "option7",
    },
  ]);

  const [fixedValue, setFixedCost] = useState(0);
  const [variableValue, setVariableCost] = useState(0);

  const [onModalFixedCost, setOnModalFixedCost] = useState(false);
  const [onModalVariableCost, setOnModalVariableCost] = useState(false);

  const [totalDays, setTotalDays] = useState<number>(0);

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

  const priceFormated = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"})

  const sendBudget = (data: IBudgetOmitId): void => {
    const { fixedCost, variableCost, endDate, startDate, workHours, ...rest } = data;
    const newEndDate = endDate.split("-");
    const yearEndDate = Number(newEndDate[0]);
    const mouthEndDate = Number(newEndDate[1]);
    const dayEndDate = Number(newEndDate[2]);

    const newStartDate = startDate.split("-");
    const yearStartDate = Number(newStartDate[0]);
    const mouthStartDate = Number(newStartDate[1]);
    const dayStartDate = Number(newStartDate[2]);
    const days = ((yearEndDate * 365) - (yearStartDate * 365)) + ((mouthEndDate * 30) - (mouthStartDate * 30)) + (dayEndDate - dayStartDate);
    const valueHours = (fixedCost + variableCost) / (days * workHours);
    console.log(valueHours);
    if (startDate < endDate) {
      // setTotalDays(valueHours);

      const newData: IBudget = {
        fixedCost: fixedValue,
        variableCost: variableValue,
        projectTime: days,
        userId: 1,
        ...rest,
      };
      
      // console.log(days * workHours)
    }
  };

  return (
    <BudgetContext.Provider
      value={{
        totalDays,
        sendBudget,
        fixedValue,
        variableValue,
        inputs,
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
