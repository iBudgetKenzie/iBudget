import { UseFormRegister } from "react-hook-form";
import { IBudgetOmitId } from "../../contexts/BudgetContext/interfaces";
interface InputProps {
  type: string;
  id:
    | "projectName"
    | "fixedCost"
    | "variableCost"
    | "startDate"
    | "endDate"
    | "daysWeek"
    | "estimatedSalary"
    | "hoursDay";
  value?: number | string;
  title: string;
  error: string | undefined;
  register: UseFormRegister<IBudgetOmitId>;
  placeholder?: string;
}

export const Input = ({
  id,
  type,
  title,
  error,
  register,
  ...rest
}: InputProps) => {
  return (
    <>
      <label htmlFor={id}>
        {title} <span>*</span>
      </label>
      <input {...rest} id={id} {...register(id)} type={type} />
      {error && <span>Preencha corretamente</span>}
    </>
  );
};
