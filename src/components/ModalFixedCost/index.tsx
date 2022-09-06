import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useBudgetContext } from "../../contexts/BudgetContext";
import { MoreExpenses } from "../MoreExpenses";
import { IInputs } from "../InputsBase";

import { ConteinerModal, Modal, ConteinerFormModal } from "./style";

export const ModalFixedCost = () => {
  const { setOnModalFixedCost, addFixedValue, inputsBase } = useBudgetContext();

  const { register, handleSubmit } = useForm();

  return (
    <ConteinerModal>
      <Modal
        as={motion.div}
        initial={{ y: -50, scale: 1, opacity: 0.7 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h2>Custos fixos</h2>
          <span onClick={() => setOnModalFixedCost(false)}>
            <IoIosCloseCircleOutline />
          </span>
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
            <button type="submit">Calcular custos</button>
          </form>
        </ConteinerFormModal>
      </Modal>
    </ConteinerModal>
  );
};
