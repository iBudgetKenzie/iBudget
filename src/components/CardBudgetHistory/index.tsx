import { MdOutlinePictureAsPdf } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";
import { useBudgetContext } from "../../contexts/BudgetContext";
import { ConteinerCardBudgetHistory } from "./style";
import { useRef } from "react";
import { IBudget } from "../../contexts/UserContext/interfaces";

export const CardBudgetHistory = ({
  projectName,
  budget,
  id,
  projectTime,
}: IBudget) => {
  const {
    setClickedBudgetId,
    deleteBudgetHistory,
    generatePDF,
    setEditModalCard,
  } = useBudgetContext();
  const ref = useRef<HTMLSpanElement>(null);

  const openEditModal = (id: string | number) => {
    setClickedBudgetId(id);
    setEditModalCard(true);
  };

  return (
    <ConteinerCardBudgetHistory>
      <h2>{projectName}</h2>
      <span>Valor: {budget}</span>
      <span ref={ref}>N°:{id}</span>
      <div>
        <button onClick={() => openEditModal(id)}>editar</button>
        <MdOutlinePictureAsPdf
          onClick={() => {
            const newDate = {
              projectName,
              budget,
              projectId: id,
              projectTime,
            };

            generatePDF(newDate);
          }}
        />
        <GoTrashcan onClick={() => deleteBudgetHistory(id)} />
      </div>
    </ConteinerCardBudgetHistory>
  );
};
