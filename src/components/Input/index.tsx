import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { IBudgetOmitId } from "../../contexts/BudgetContext";

interface InputProps {
  type: string;
  id: "projectName" | "fixedCost" | "variableCost" | "startDate" | "endDate" | "daysWeek" | "estimatedSalary" | "hoursDay";
  value?: number;
  title: string;
  error: string | undefined;
  register: UseFormRegister<IBudgetOmitId>;
  placeholder?: string;
  rest?: any
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  id,
  type,
  title,
  error,
  register,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={id}>
        {title} <span>*</span>
      </label>
      <input {...rest} id={id} {...register(id)} type={type}/>
      {error && <span>{error}</span>}
    </>
  );
});
