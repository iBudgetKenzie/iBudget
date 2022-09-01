import { ReactNode } from "react";
// import { BudgetContext } from "../../contexts/BudgetContext/index";
// import { IMoreExpenses } from "../../contexts/BudgetContext/index";

import { InputMoreExpenses } from "./style"

interface InputProps {
  children: ReactNode
}

export const MoreExpenses = ({children}: InputProps) => {
  return (
    <InputMoreExpenses>
      {children}
    </InputMoreExpenses>
  );
};


