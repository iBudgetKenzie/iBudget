import { IoSearch } from "react-icons/io5";

import { CardBudgetHistory } from "../CardBudgetHistory";

import { ContainerBudgetHistory, FilterBar } from "./style";

export const BudgetHistory = () => {
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
        <CardBudgetHistory />
        <CardBudgetHistory />
        <CardBudgetHistory />
        <CardBudgetHistory />
        <CardBudgetHistory />
        <CardBudgetHistory />
        <CardBudgetHistory />
      </ul>
    </ContainerBudgetHistory>
  );
};
