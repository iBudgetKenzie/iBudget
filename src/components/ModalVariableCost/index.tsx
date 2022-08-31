import { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";
import { ConteinerModalVariableCost, Modal } from "./style";
import { IMoreExpenses } from "../../contexts/BudgetContext";


export const ModalVariableCost = () => {
  const { setOnModalVariableCost, addVariableValue, variableCost } = useContext(BudgetContext);
  return (
    <ConteinerModalVariableCost>
      <Modal>
        <div>
          <h2>Custo variável</h2>
          <span onClick={() => setOnModalVariableCost(false)}>X</span>
        </div>
        <div>
          {
            variableCost.map(({costDescription, value}: IMoreExpenses) => {
              return <MoreExpenses costDescription={costDescription} value={value}/>
            })
          }
        </div>
        <button onClick={() => addVariableValue()}>Mais gastos</button>
      </Modal>
    </ConteinerModalVariableCost>
  );
};
