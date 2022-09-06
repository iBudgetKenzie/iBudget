import { motion } from "framer-motion";

import { CardBudgetHistory } from "../CardBudgetHistory";
import { useUserContext } from "../../contexts/UserContext/index";
import { IoSearch } from "react-icons/io5";
import { ContainerBudgetHistory, FilterBar } from "./style";
import { IBudget } from "../../contexts/UserContext/interfaces";
import { ChangeEvent, useState } from "react";
import { useBudgetContext } from "../../contexts/BudgetContext";

export const BudgetHistory = () => {
  const { setOnHistoric, setOnCreateBudget } = useBudgetContext();
  const { budgetHistory } = useUserContext();
  const [filteredBudget, setFilteredBudget] = useState<IBudget[]>([]);

  const filterProducts = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value.toLowerCase();

    const filterSearched = budgetHistory.filter((elem) =>
      elem.projectName.toLowerCase().includes(targetValue),
    );
    setFilteredBudget(filterSearched);
  };

  return (
    <ContainerBudgetHistory>
      <FilterBar>
        <div>
          <h2>Histórico de orçamentos</h2>
          <h2
            onClick={() => {
              setOnHistoric(false);
              setOnCreateBudget(true);
            }}
          >
            Gerar orçamento
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => filterProducts(event)}
          />
          <span>
            <IoSearch />
          </span>
        </div>
      </FilterBar>

      {budgetHistory && budgetHistory.length === 0 ? (
        <motion.ul layout>
          <p>Ops, não existe orçamento ainda aqui!</p>
        </motion.ul>
      ) : (
        <motion.ul>
          {filteredBudget.length > 0
            ? filteredBudget?.map(
                ({ budget, projectName, id, projectTime }: IBudget) => {
                  return (
                    <CardBudgetHistory
                      key={id}
                      projectName={projectName}
                      budget={budget}
                      id={id}
                      projectTime={projectTime}
                      fixedCost=""
                      variableCost=""
                    />
                  );
                },
              )
            : budgetHistory?.map(
                ({ budget, projectName, id, projectTime }: IBudget) => {
                  return (
                    <CardBudgetHistory
                      key={id}
                      projectName={projectName}
                      budget={budget}
                      id={id}
                      projectTime={projectTime}
                      fixedCost=""
                      variableCost=""
                    />
                  );
                },
              )}
        </motion.ul>
      )}
    </ContainerBudgetHistory>
  );
};
