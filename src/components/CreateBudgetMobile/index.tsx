import { useBudgetContext } from "../../contexts/BudgetContext";
import { CreateBudget } from "../CreateBudget";

import { ConteinerBudgetMobile } from "./style";

export const CreateBudgetMobile = () => {
  const { setOnCreateBudget, setOnHistoric } = useBudgetContext();

  return (
    <ConteinerBudgetMobile>
      <h2
        onClick={() => {
          setOnHistoric(true);
          setOnCreateBudget(false);
        }}
      >
        Histórico
      </h2>
      <CreateBudget />
    </ConteinerBudgetMobile>
  );
};
