import { createContext, ReactNode, useState, useEffect } from "react";

// import { IBudget } from "../UserContext/index"

export interface IBudgetOmitId {
  projectName: string;
  fixedCost: number;
  variableCost: number;
  startDate: string;
  endDate: string;
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
  fixedCost: number;
  variableCost: number;
  sendBudget: (data: IBudgetOmitId) => void
}

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext
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
    {title: "Moradia:",example: "Ex: Aluguel, condomínio...",name: "option0"},
    {title: "Moradia:",example: "Ex: Aluguel, condomínio...",name: "option1"},
    {title: "Moradia:",example: "Ex: Aluguel, condomínio...",name: "option2"},
    {title: "Moradia:",example: "Ex: Aluguel, condomínio...",name: "option3"},
    {title: "Moradia:",example: "Ex: Aluguel, condomínio...",name: "option4"},
    {title: "Moradia:",example: "Ex: Aluguel, condomínio...",name: "option5"},
    {title: "Moradia:",example: "Ex: Aluguel, condomínio...",name: "option6"},
    {title: "Moradia:",example: "Ex: Aluguel, condomínio...",name: "option7"},
  ]);

  const [fixedCost, setFixedCost] = useState(0);
  const [variableCost, setVariableCost] = useState(0);

  const [onModalFixedCost, setOnModalFixedCost] = useState(false);
  const [onModalVariableCost, setOnModalVariableCost] = useState(false);

  const addFixedValue = (data: any): void => {
    const array = Object.values(data).filter((elemnt) => !!elemnt);
    const reduceArray = array.reduce((acc: number, current) => acc + Number(current), 0);
    setFixedCost(reduceArray)
    console.log(reduceArray)
  };

  const addVariableValue = (data: any): void => {
    const array = Object.values(data).filter((elemnt) => !!elemnt);
    const reduceArray = array.reduce((acc: number, current) => acc + Number(current), 0);
    setVariableCost(reduceArray)
    console.log(reduceArray)
  };

  const sendBudget = (data: IBudgetOmitId): void => {
    console.log(data)
    // const {fixedCost, variableCost} = data

    // const preview = (fixedCost + variableCost) 
  };

  return (
    <BudgetContext.Provider
      value={{
        sendBudget,
        fixedCost,
        variableCost,
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
