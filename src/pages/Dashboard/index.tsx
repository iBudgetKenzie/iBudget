import { useContext } from "react";
import { ModalFixedCost } from "../../components/ModalFixedCost";
import { ModalVariableCost } from "../../components/ModalVariableCost";
import { CreateBudget } from "../../components/CreateBudget";
import { BudgetContext } from "../../contexts/BudgetContext";
import HeaderL from "../../components/HeaderL";

const Dashboard = () => {
  const { onModalFixedCost, onModalVariableCost } = useContext(BudgetContext);

  return (
    <>
    <HeaderL/>
    <div>
      <CreateBudget />

      {onModalFixedCost ? <ModalFixedCost /> : null}
      {onModalVariableCost ? <ModalVariableCost /> : null}
    </div>
    </>
  );
};

export default Dashboard;
