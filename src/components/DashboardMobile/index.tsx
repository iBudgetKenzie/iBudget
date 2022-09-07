// import { motion } from "framer-motion";

import { ModalFixedCost } from "../ModalFixedCost";
import { ModalVariableCost } from "../../components/ModalVariableCost";
import HeaderLogged from "../../components/HeaderLogged";
import { useBudgetContext } from "../../contexts/BudgetContext";
import { ModalEditCard } from "../../components/ModalEditCard";
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
          {onCreateBudget ? (
            <CreateBudgetMobile />
          ) : (
            <BudgetHistoryMobile />
          )}
        </MainConteinerMobile>

        {onModalFixedCost && <ModalFixedCost />}
        {onModalVariableCost && <ModalVariableCost />}
        {editModalCard && <ModalEditCard />}
      </main>
    </>
  );
};
