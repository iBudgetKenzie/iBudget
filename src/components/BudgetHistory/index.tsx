import { CardBudgetHistory } from "../CardBudgetHistory";
import { IBudget } from "../../contexts/UserContext/index";
import { useUserContext } from "../../contexts/UserContext/index";

import { IoSearch } from "react-icons/io5";

import { ContainerBudgetHistory, FilterBar } from "./style";

export const BudgetHistory = () => {
  const { budgetHistory } = useUserContext();

  return (
    <ContainerBudgetHistory>
      <FilterBar>
        <h2>Histórico de orçamentos</h2>
        <div>
          <input type="text" placeholder="Search..." />
          <span>
            <IoSearch />
          </span>
        </div>
      </FilterBar>

      <ul>
        {budgetHistory && budgetHistory.length === 0 ? (
          <p>Ops, não existe orçamento ainda aqui!</p>
        ) : (
          budgetHistory?.map(
            ({ budget, projectName, id, projectTime }: IBudget) => {
              return (
                <CardBudgetHistory
                  key={id}
                  projectName={projectName}
                  budget={budget}
                  id={id}
                  projectTime={projectTime}
                />
              );
            }
          )
        )}
      </ul>
    </ContainerBudgetHistory>
  );
};
