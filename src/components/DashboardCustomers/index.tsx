import { AnimatePresence, motion } from "framer-motion";

// import { ModalFixedCost } from "../ModalFixedCost/index";
// import { ModalVariableCost } from "../ModalVariableCost/index";
// import { ModalEditCard } from "../ModalEditCard/index";
// import { useBudgetContext } from "../../contexts/BudgetContext";

import { MainConteiner } from "./style";
import { CreateCustomer } from "../CreateCustomer";
import { CustomerHistory } from '../CustomerHistory/index';

export const DashboardCustomers = () => {
  // const { onModalFixedCost, onModalVariableCost, editModalCard } =
  //   useBudgetContext();

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
            <CreateCustomer />
          </div>
        </section>
        <section>
          <CustomerHistory />
        </section>
      </MainConteiner>

      <AnimatePresence>
        {/* {onModalFixedCost && <ModalFixedCost />}
        {onModalVariableCost && <ModalVariableCost />}
        {editModalCard && <ModalEditCard />} */}
      </AnimatePresence>
    </main>
  );
};
