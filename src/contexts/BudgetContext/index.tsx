import { createContext, ReactNode, useState } from "react";

interface IBudgetProvider {
  children: ReactNode;
}

export interface IMoreExpenses {
  value: string;
  costDescription: string;
}

interface IBudgetContext {
  addFixedValue: () => void;
  addVariableValue: () => void;
  fixedCost: IMoreExpenses[];
  variableCost: IMoreExpenses[];
  onModalFixedCost: boolean;
  onModalVariableCost: boolean;
  setOnModalFixedCost: (modalFixedValue: boolean) => void;
  setOnModalVariableCost: (modalVariableValue: boolean) => void;
}

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext
);

export const BudgetProvider = ({ children }: IBudgetProvider) => {
  const [fixedCost, setFixedCost] = useState<IMoreExpenses[]>([
    {
      value: "100",
      costDescription: "Água",
    },
    {
      value: "100",
      costDescription: "Energia",
    },
    {
      value: "100",
      costDescription: "Internet",
    },
  ]);
  const [variableCost, setVariableCost] = useState<IMoreExpenses[]>([
    {
      value: "100",
      costDescription: "Água",
    },
    {
      value: "100",
      costDescription: "Energia",
    },
    {
      value: "100",
      costDescription: "Internet",
    },
  ]);

  // const [fixedCost, setFixedCost] = useState(0);
  // const [variableCost, setVariableCost] = useState(0);

  const [onModalFixedCost, setOnModalFixedCost] = useState(false);
  const [onModalVariableCost, setOnModalVariableCost] = useState(false);

  const addFixedValue = (): void => {
    const newDate = {
      value: "100",
      costDescription: "",
    };
    setFixedCost([...fixedCost, newDate]);
    console.log(fixedCost)
  };

  const addVariableValue = (): void => {
    const newDate = {
      value: "100",
      costDescription: "",
    };
    setVariableCost([...variableCost, newDate]);
    console.log(variableCost)
  };

  return (
    <BudgetContext.Provider
      value={{
        onModalFixedCost,
        onModalVariableCost,
        setOnModalFixedCost,
        setOnModalVariableCost,
        addFixedValue,
        addVariableValue,
        fixedCost,
        variableCost,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
