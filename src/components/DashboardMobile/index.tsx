import { motion } from "framer-motion";

import { ModalFixedCost } from "../ModalFixedCost";
import { ModalVariableCost } from "../ModalVariableCost";
// import { CreateBudget } from "../../components/CreateBudget";
import HeaderLogged from "../HeaderLogged";
import { useBudgetContext } from "../../contexts/BudgetContext";
import { ModalEditCard } from "../ModalEditCard";
// import { BudgetHistory } from "../BudgetHistory";
import { BudgetHistoryMobile } from "../BudgetHistoryMobile";
import { CreateBudgetMobile } from "../CreateBudgetMobile/index";

import { MainConteinerMobile } from "./style";

export const DashboardMobile = () => {
  const {
    onModalFixedCost,
    onModalVariableCost,
    editModalCard,
    onCreateBudget,
  } = useBudgetContext();
  return (
    <>
      <HeaderLogged />
      <main>
        <MainConteinerMobile
          as={motion.div}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {onCreateBudget ? <CreateBudgetMobile /> : <BudgetHistoryMobile />}
        </MainConteinerMobile>

        {onModalFixedCost && <ModalFixedCost />}
        {onModalVariableCost && <ModalVariableCost />}
        {editModalCard && <ModalEditCard />}
      </main>
    </>
  );
};
