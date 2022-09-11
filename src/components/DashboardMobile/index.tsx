import { AnimatePresence } from "framer-motion";

import { HeaderLogged } from "../HeaderLogged";
import { ModalEditCard } from "../ModalEditCard";
import { ModalFixedCost } from "../ModalFixedCost";
import { ModalVariableCost } from "../ModalVariableCost";
import { useBudgetContext } from "../../contexts/BudgetContext";
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
        <MainConteinerMobile>
          {onCreateBudget ? <CreateBudgetMobile /> : <BudgetHistoryMobile />}
        </MainConteinerMobile>

        <AnimatePresence>
          {onModalFixedCost && <ModalFixedCost />}
          {onModalVariableCost && <ModalVariableCost />}
          {editModalCard && <ModalEditCard />}
        </AnimatePresence>
      </main>
    </>
  );
};
