import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";
import { ConteinerModalFixedCost, Modal } from "./style";
import { IMoreExpenses } from "../../contexts/BudgetContext";

export const ModalFixedCost = () => {
  const { setOnModalFixedCost, fixedCost, addFixedValue } = useContext(BudgetContext);
  return (
    <ConteinerModalFixedCost>
      <Modal>
        <div>
          <h2>Custo fixo</h2>
          <span onClick={() => setOnModalFixedCost(false)}>X</span>
        </div>
        <div>
          {
            fixedCost.map(({ costDescription, value }: IMoreExpenses, index) => {
              return <MoreExpenses key={index} costDescription={costDescription} value={value}/>
            })
          }
        </div>
        <button onClick={() => addFixedValue()}>Mais gastos</button>
      </Modal>
    </ConteinerModalFixedCost>
  );
};
