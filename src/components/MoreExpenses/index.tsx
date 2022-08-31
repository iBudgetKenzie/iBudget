import { ReactNode } from "react";
// import { BudgetContext } from "../../contexts/BudgetContext/index";
// import { IMoreExpenses } from "../../contexts/BudgetContext/index";
interface InputProps {
  children: ReactNode
}

export const MoreExpenses = ({children}: InputProps) => {
  return (
    <div>
      {children}
    </div>
  );
};


