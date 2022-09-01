import { useContext } from "react";
import { ModalFixedCost } from "../../components/ModalFixedCost";
import { ModalVariableCost } from "../../components/ModalVariableCost";
import { CreateBudget } from "../../components/CreateBudget";
import { BudgetContext } from "../../contexts/BudgetContext";
import HeaderLogged from "../../components/HeaderLogged";


const Dashboard = () => {
  const { onModalFixedCost, onModalVariableCost } = useContext(BudgetContext);

  return (
    <>
    <HeaderLogged/>
    <div>
      <CreateBudget />

      {onModalFixedCost && <ModalFixedCost />}
      {onModalVariableCost && <ModalVariableCost />}
    </div>
    </>
  );
};

export default Dashboard;
