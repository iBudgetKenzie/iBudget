import { useBudgetContext } from "../../contexts/BudgetContext";
import { BudgetHistory } from "../BudgetHistory";

import { ConteinerHistoryMobile } from "./style";

export const BudgetHistoryMobile = () => {
  const { setOnHistoric, setOnCreateBudget } = useBudgetContext();
  return (
    <ConteinerHistoryMobile>
      <h2
        onClick={() => {
          setOnHistoric(false);
          setOnCreateBudget(true);
        }}
      >
        Gerar orçamento
      </h2>
      <BudgetHistory />
    </ConteinerHistoryMobile>
  );
};
