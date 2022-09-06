import { ReactNode } from "react";
import { IInputs } from "../../components/InputsBase";
import { IGeneratePdfProps } from "../../services/generatePdf";
import { IBudget } from "../UserContext/interfaces";

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

export type IBudgetOmitIdProps = Omit<IBudget, "id">;

export interface IBudgetProvider {
  children: ReactNode;
}

export interface IBudgetContext {
  totalDays: string;
  fixedValue: number;
  variableValue: number;
  onModalFixedCost: boolean;
  onModalVariableCost: boolean;
  editModalCard: boolean;
  inputsBase: IInputs[];
  sendBudget: (data: IBudgetOmitId) => void;
  addFixedValue: (data: any) => void;
  addVariableValue: (data: any) => void;
  addEditedValue: (data: any) => void;
  setOnModalFixedCost: (modalFixedValue: boolean) => void;
  inputProjectName: string;
  setInputProjectName: (string: string) => void;
  inputBudgetValue: string;
  setBudgetValue: (string: string) => void;
  inputProjectTime: number;
  setProjectTime: (number: number) => void;
  setOnModalVariableCost: (modalVariableValue: boolean) => void;
  setEditModalCard: (editModalCard: boolean) => void;
  setClickedBudgetId: (data: number | string) => void;
  deleteBudgetHistory: (id: number | string) => Promise<void>;
  generatePDF: (date: IGeneratePdfProps) => void;
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