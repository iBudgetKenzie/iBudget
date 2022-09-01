import { useContext } from "react";
import { useForm } from "react-hook-form";

import { BudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";
import { IInputs } from "../../contexts/BudgetContext/index";

import { ConteinerModalVariableCost, Modal, ConteinerFormModal } from "./style";

export const ModalVariableCost = () => {
  const { setOnModalVariableCost, addVariableValue, inputs } =
    useContext(BudgetContext);

  const { register, handleSubmit } = useForm();

  return (
    <ConteinerModalVariableCost>
      <Modal>
        <div>
          <h2>Custos variáveis</h2>
          <span onClick={() => setOnModalVariableCost(false)}>X</span>
        </div>
        <ConteinerFormModal>
          <form onSubmit={handleSubmit(addVariableValue)}>
            {inputs.map(({ example, name, title }: IInputs, index) => {
              return (
                <MoreExpenses key={index}>
                  <label htmlFor="value">{title}</label>
                  <input
                    type="number"
                    id="value"
                    placeholder={example}
                    {...register(name)}
                  />

                  {/* <label htmlFor="description">Descrição custo:</label>
                  <input
                    type="text"
                    placeholder="Ex: Aluguel"
                    id="description"
                  /> */}
                </MoreExpenses>
              );
            })}
            <button type="submit">Calcular custos</button>
          </form>
        </ConteinerFormModal>
      </Modal>
    </ConteinerModalVariableCost>
  );
};
