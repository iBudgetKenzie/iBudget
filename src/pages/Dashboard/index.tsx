import { motion } from "framer-motion";

import { ModalFixedCost } from "../../components/ModalFixedCost";
import { ModalVariableCost } from "../../components/ModalVariableCost";
import { CreateBudget } from "../../components/CreateBudget";
import HeaderLogged from "../../components/HeaderLogged";
import { BudgetHistory } from "../../components/BudgetHistory";
import { useBudgetContext } from "../../contexts/BudgetContext";
import { DashboardMobile } from "../../components/DashboardMobile/index";

import { MainConteiner } from "./styles";
import { ModalEditCard } from "../../components/ModalEditCard";

const Dashboard = () => {
  const { onModalFixedCost, onModalVariableCost, editModalCard } =
    useBudgetContext();

  return window.innerWidth > 1023 ? (
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
            <div>
              <CreateBudget />
            </div>
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
  ) : (
    <DashboardMobile />
  );
};

export default Dashboard;
