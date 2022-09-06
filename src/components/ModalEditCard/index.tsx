import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useBudgetContext } from "../../contexts/BudgetContext";
import {
  ConteinerModalFixedCost,
  Modal,
  ConteinerFormModal,
} from "../ModalFixedCost/style";
import { StyledModalEdit } from "./style";

interface IEditData {
  projectName: string;
  projectTime: string;
  budget: string;
}

export const ModalEditCard = () => {
  const { addEditedValue, setEditModalCard } = useBudgetContext();

  const { register, handleSubmit } = useForm<IEditData>();

  return (
    <ConteinerModalFixedCost>
      <Modal
        as={motion.div}
        initial={{ y: -50, scale: 1, opacity: 0.7 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h2>Editar orçamento</h2>
          <span onClick={() => setEditModalCard(false)}>
            <IoIosCloseCircleOutline />
          </span>
        </div>
        <ConteinerFormModal>
          <form onSubmit={handleSubmit(addEditedValue)}>
            <StyledModalEdit>
              <label htmlFor="value">Nome do projeto:</label>
              <input
                type="text"
                id="value"
                placeholder="Atualize os dados aqui"
                {...register("projectName")}
              />
              <label htmlFor="value">Conclusão em:</label>
              <input
                type="text"
                id="value"
                placeholder="Atualize os dados aqui"
                {...register("projectTime")}
              />
              <label htmlFor="value">Valor Total do orçamento:</label>
              <input
                type="text"
                id="value"
                placeholder="Atualize os dados aqui"
                {...register("budget")}
              />
              <button type="submit">Confirmar</button>
            </StyledModalEdit>
          </form>
        </ConteinerFormModal>
      </Modal>
    </ConteinerModalFixedCost>
  );
};
