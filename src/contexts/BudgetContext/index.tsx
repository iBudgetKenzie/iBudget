import { createContext, ReactNode, useState } from "react";

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
  inputs: string[];
  fixedCost: number;
  variableCost: number;
}

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext
);

export interface IFixedCost {
  input0: string;
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  input6: string;
  input7: string;
  input8: string;
  input9: string;
}

export const BudgetProvider = ({ children }: IBudgetProvider) => {
  const [inputs] = useState<string[]>([
    "input0",
    "input1",
    "input2",
    "input3",
    "input4",
    "input5",
    "input6",
    "input7",
    "input8",
    "input9",
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

  return (
    <BudgetContext.Provider
      value={{
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
