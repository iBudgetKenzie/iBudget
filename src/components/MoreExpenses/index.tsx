import { ReactNode } from "react";
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


