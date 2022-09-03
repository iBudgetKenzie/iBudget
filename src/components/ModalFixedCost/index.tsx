import { useForm } from "react-hook-form";

import { useBudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";

import { ConteinerModalFixedCost, Modal, ConteinerFormModal } from "./style";
import { IInputs } from "../InputsBase";

export const ModalFixedCost = () => {
  const { setOnModalFixedCost, addFixedValue, inputsBase } = useBudgetContext();

  const { register, handleSubmit } = useForm();

  return (
    <ConteinerModalFixedCost>
      <Modal>
        <div>
          <h2>Custos fixos</h2>
          <span onClick={() => setOnModalFixedCost(false)}>X</span>
        </div>
        <ConteinerFormModal>
          <form onSubmit={handleSubmit(addFixedValue)}>
            {inputsBase.map(({ example, title, name }: IInputs, index) => {
              return (
                <MoreExpenses key={index}>
                  <label htmlFor="value">{title}</label>
                  <input
                    type="number"
                    id="value"
                    placeholder={example}
                    {...register(name)}
                  />
                </MoreExpenses>
              );
            })}
            <button type="submit">Enviar</button>
          </form>
        </ConteinerFormModal>
      </Modal>
    </ConteinerModalFixedCost>
  );
};
