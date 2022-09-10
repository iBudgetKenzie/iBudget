import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useBudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";
import { IInputs } from "../InputsBase";

import {
  ConteinerModal,
  Modal,
  ConteinerFormModal,
} from "../ModalFixedCost/style";

export const ModalVariableCost = () => {
  const { setOnModalVariableCost, addVariableValue, inputsBase } =
    useBudgetContext();

  const { register, handleSubmit } = useForm();

  const handleOutsideClick = (event: React.SyntheticEvent) => {
    const targetId = (event.target as HTMLDivElement).id;
    if (targetId === "modalVariableCost") {
      setOnModalVariableCost(false);
    }
  };

  return (
    <ConteinerModal
      id="modalVariableCost"
      onClick={(event) => handleOutsideClick(event)}
    >
      <Modal
        as={motion.div}
        initial={{ y: -50, scale: 1, opacity: 0.7 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h2>Custos variáveis</h2>
          <span onClick={() => setOnModalVariableCost(false)}>
            <IoIosCloseCircleOutline />
          </span>
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
    </ConteinerModal>
  );
};
