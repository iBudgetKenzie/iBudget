import { useContext } from "react";
import { useForm } from "react-hook-form";

import { BudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";

import { ConteinerModalFixedCost, Modal, ConteinerFormModal } from "./style";
import { IInputs } from "../../contexts/BudgetContext/index";

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
          <h2>Custos fixos</h2>
          <span onClick={() => setOnModalFixedCost(false)}>X</span>
        </div>
        <ConteinerFormModal>
          <form onSubmit={handleSubmit(addFixedValue)}>
            {inputs.map(({example, title, name}: IInputs, index) => {
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
