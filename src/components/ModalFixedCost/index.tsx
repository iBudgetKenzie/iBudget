import { useContext } from "react";
import { useForm } from "react-hook-form";

import { BudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";

import { ConteinerModalFixedCost, Modal } from "./style";
// import { IFixedCost } from "../../contexts/BudgetContext";

export const ModalFixedCost = () => {
  const { setOnModalFixedCost, addFixedValue, inputs } =
    useContext(BudgetContext);

  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <ConteinerModalFixedCost>
      <Modal>
        <div>
          <h2>Custo fixo</h2>
          <span onClick={() => setOnModalFixedCost(false)}>X</span>
        </div>
        <div>
          <form onSubmit={handleSubmit(addFixedValue)}>
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
            })}
            <button type="submit">Calcular custos</button>
          </form>
        </div>
      </Modal>
    </ConteinerModalFixedCost>
  );
};
