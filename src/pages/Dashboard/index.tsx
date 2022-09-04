import { useContext } from "react";
import { motion } from "framer-motion";

import { ModalFixedCost } from "../../components/ModalFixedCost";
import { ModalVariableCost } from "../../components/ModalVariableCost";
import { CreateBudget } from "../../components/CreateBudget";
import { BudgetContext } from "../../contexts/BudgetContext";
import HeaderLogged from "../../components/HeaderLogged";
import { BudgetHistory } from "../../components/BudgetHistory";

import { MainConteiner } from "./styles";
import { ModalEditCard } from "../../components/ModalEditCard";

const Dashboard = () => {
  const { onModalFixedCost, onModalVariableCost, editModalCard } =
    useContext(BudgetContext);

  return (
    <>
      <HeaderLogged />
      <main>
        <MainConteiner
          as={motion.div}
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <section>
            <CreateBudget />
          </section>
          <section>
            <BudgetHistory />
          </section>
        </MainConteiner>

        {onModalFixedCost && <ModalFixedCost />}
        {onModalVariableCost && <ModalVariableCost />}
        {editModalCard && <ModalEditCard />}
      </main>
    </>
  );
};

export default Dashboard;
