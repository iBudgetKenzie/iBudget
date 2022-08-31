import { useContext, useState } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/index";

interface IMoreExpenses {
  value: string;
  costDescription: string;
}

export const MoreExpenses = ({ costDescription, value }: IMoreExpenses) => {
  const [valueExpense, setValueExpense] = useState<string>("");
  const [costDescriptionExpense, setCostDescriptionExpense] =
    useState<string>("");

  const { addFixedValue } = useContext(BudgetContext);

  

  return (
    <div>
      <label htmlFor="value">Valor:</label>
      <input
        type="text"
        placeholder="Ex: 1,00R$"
        id="value"
        value={value}
        onChange={(event) => setValueExpense(event.target.value)}
      />

      <label htmlFor="description">Descrição custo:</label>
      <input
        type="text"
        placeholder="Ex: Aluguel"
        id="description"
        value={costDescription}
        onChange={(event) => setCostDescriptionExpense(event.target.value)}
      />
    </div>
  );
};
