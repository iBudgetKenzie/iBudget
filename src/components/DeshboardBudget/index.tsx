import { AnimatePresence, motion } from "framer-motion";

import { ModalFixedCost } from "../ModalFixedCost/index";
import { ModalVariableCost } from "../ModalVariableCost/index";
import { ModalEditCard } from "../ModalEditCard/index";
import { useBudgetContext } from "../../contexts/BudgetContext";
import { CreateBudget } from '../CreateBudget/index';
import { BudgetHistory } from '../BudgetHistory/index';

import { MainConteiner } from "./style";

export const DeshboardBudget = () => {
  const { onModalFixedCost, onModalVariableCost, editModalCard } =
    useBudgetContext();

  return (
    <main>
      <MainConteiner
        as={motion.div}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <section>
          <div>
            <CreateBudget />
          </div>
        </section>
        <section>
          <BudgetHistory />
        </section>
      </MainConteiner>

      <AnimatePresence>
        {onModalFixedCost && <ModalFixedCost />}
        {onModalVariableCost && <ModalVariableCost />}
        {editModalCard && <ModalEditCard />}
      </AnimatePresence>
    </main>
  );
};
