import { useForm } from "react-hook-form";

import { useBudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";
import { IInputs } from "../InputsBase";

import { ConteinerModalVariableCost, Modal, ConteinerFormModal } from "./style";

export const ModalVariableCost = () => {
  const { setOnModalVariableCost, addVariableValue, inputsBase } =
    useBudgetContext();

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
            {inputsBase.map(({ example, name }: IInputs, index) => {
              return (
                <MoreExpenses key={index}>
                  <label htmlFor="value">{`Valor${index + 1}`}</label>
                  <input
                    type="number"
                    id="value"
                    placeholder={example}
                    {...register(name)}
                  />
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
