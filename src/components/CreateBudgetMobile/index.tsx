import { useBudgetContext } from "../../contexts/BudgetContext";
import { CreateBudget } from "../CreateBudget";

import { ConteinerBudgetMobile } from "./style";

export const CreateBudgetMobile = () => {
  const {
    setOnCreateBudget,
    setOnHistoric,
    setFixedCost,
    setVariableCost,
    setTotalDays,
  } = useBudgetContext();

  const handleClick = (): void => {
    setOnHistoric(true);
    setOnCreateBudget(false);
    setFixedCost(0);
    setVariableCost(0);
    setTotalDays("-");
  };

  return (
    <ConteinerBudgetMobile>
      <h2
        onClick={() => {
          handleClick();
        }}
      >
        Histórico
      </h2>
      <CreateBudget />
    </ConteinerBudgetMobile>
  );
};
