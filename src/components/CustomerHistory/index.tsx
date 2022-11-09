import { motion } from "framer-motion";

// import { CardBudgetHistory } from "../CardBudgetHistory";
// import { useUserContext } from "../../contexts/UserContext/index";
import { IoSearch } from "react-icons/io5";
import { ContainerBudgetHistory, FilterBar } from "./style";
// import { IBudget } from "../../contexts/UserContext/interfaces";
// import { useState } from "react";
// import { useBudgetContext } from "../../contexts/BudgetContext";

export const CustomerHistory = () => {
  // const { setOnHistoric, setOnCreateBudget } = useBudgetContext();
  // const { budgetHistory } = useUserContext();
  // const [searchValue, setSearchValue] = useState<string>("");

  // budgetHistory.sort((a, b) => Number(b.id) - Number(a.id));

  // const normalize = (str: string): string => {
  //   return str
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "")
  //     .toLowerCase()
  //     .trim();
  // };

  // const filteredCustomers =
  //   searchValue.length > 0
  //     ? budgetHistory.filter((elem) => {
  //         const normalizedSearch = normalize(searchValue);
  //         const normalizedProjectName = normalize(elem.projectName);

  //         return normalizedProjectName.includes(normalizedSearch);
  //       })
  //     : [];

  return (
    <ContainerBudgetHistory>
      <FilterBar>
        <div>
          <h2>Histórico de clientes</h2>
          <h2
            onClick={() => {}}
          >
            Criar Cliente
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            // onChange={(event) => setSearchValue(event.target.value)}
          />
          <span>
            <IoSearch />
          </span>
        </div>
      </FilterBar>

      <motion.div>
        {/* {searchValue.length > 0 ? (
          filteredCustomers.length > 0 ? (
            filteredCustomers.map(
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
              }
            )
          ) : (
            <p>
              Nada encontrado para: <strong>{searchValue}</strong>
            </p>
          )
        ) : filteredCustomers.length > 0 ? (
          filteredCustomers.map(
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
            }
          )
        ) : (
          <span>Nenhum orçamento criado até o momento</span>
        )} */}
      </motion.div>
    </ContainerBudgetHistory>
  );
};
