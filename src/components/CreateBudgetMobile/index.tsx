import { motion } from "framer-motion";
import { useBudgetContext } from "../../contexts/BudgetContext";
import { CreateBudget } from "../CreateBudget";

import { ConteinerCreateMobile } from "./style";

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
    <ConteinerCreateMobile
      as={motion.section}
      initial={{ x: "-50vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2
        onClick={() => {
          handleClick();
        }}
      >
        Histórico
      </h2>
      <CreateBudget />
    </ConteinerCreateMobile>
  );
};
