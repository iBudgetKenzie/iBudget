// import { MdOutlinePictureAsPdf } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";
import { motion } from "framer-motion";

import { useBudgetContext } from "../../contexts/BudgetContext";
import { ConteinerCardBudgetHistory } from "./style";
import { useRef } from "react";
import { IBudget } from "../../contexts/UserContext/interfaces";
import { FaRegEdit } from "react-icons/fa";

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
    <ConteinerCardBudgetHistory
      as={motion.li}
      layout
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <h2>{projectName}</h2>
      <span>Valor: {budget}</span>
      <span ref={ref}>N°:{id}</span>
      <div>
        <button onClick={() => openEditModal(id)}><FaRegEdit/></button>
        <GrDocumentPdf
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
