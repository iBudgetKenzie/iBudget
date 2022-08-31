import { useContext } from "react";
import { useForm } from "react-hook-form";

import { BudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";
// import { IMoreExpenses } from "../../contexts/BudgetContext";

import { ConteinerModalVariableCost, Modal } from "./style";

export const ModalVariableCost = () => {
  const { setOnModalVariableCost, addVariableValue, inputs } = useContext(BudgetContext);

  const {register, handleSubmit} = useForm()

  return (
    <ConteinerModalVariableCost>
      <Modal>
        <div>
          <h2>Custo variável</h2>
          <span onClick={() => setOnModalVariableCost(false)}>X</span>
        </div>
        <div>
        <form onSubmit={handleSubmit(addVariableValue)}>
            {inputs.map((index) => {
              return (
                <MoreExpenses key={index}>
                  <label htmlFor="value">Valor:</label>
                  <input
                    type="number"
                    id="value"
                    placeholder="Ex: 1,00R$"
                    {...register(index)}
                  />

                  <label htmlFor="description">Descrição custo:</label>
                  <input
                    type="text"
                    placeholder="Ex: Aluguel"
                    id="description"
                  />
                </MoreExpenses>
              );
            })};
            <button type="submit">Calcular custos</button>
          </form>
        </div>
      </Modal>
    </ConteinerModalVariableCost>
  );
};
