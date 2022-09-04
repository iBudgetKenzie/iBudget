import { useForm } from "react-hook-form";
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
      <Modal>
        <div>
          <h2>Editar orçamento</h2>
          <span onClick={() => setEditModalCard(false)}>X</span>
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
            </StyledModalEdit>
            <button type="submit">Confirmar</button>
          </form>
        </ConteinerFormModal>
      </Modal>
    </ConteinerModalFixedCost>
  );
};
