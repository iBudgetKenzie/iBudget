import { useRef } from "react";
import { GoTrashcan } from "react-icons/go";
import { GrDocumentPdf } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { motion } from "framer-motion";

import { useBudgetContext } from "../../contexts/BudgetContext";
import { IBudget } from "../../contexts/UserContext/interfaces";
import { ConteinerCardCustomerHistory } from "./style";

export const CardCustomerHistory = ({
  projectName,
  budget,
  id,
  projectTime,
}: IBudget) => {
  const priceFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const {
    setClickedBudgetId,
    deleteBudgetHistory,
    generatePDF,
    setEditModalCard,
    setInputProjectName,
    setBudgetValue,
    setProjectTime,
  } = useBudgetContext();
  const ref = useRef<HTMLSpanElement>(null);

  const openEditModal = (
    id: string | number,
    projectName: string,
    budget: number,
    projectTime: number
  ) => {
    setClickedBudgetId(id);
    setEditModalCard(true);
    setInfosOnInputs(projectName, budget, projectTime);
  };

  const setInfosOnInputs = (
    projectName: string,
    budget: number,
    projectTime: number
  ) => {
    setInputProjectName(projectName);
    setBudgetValue(budget);
    setProjectTime(projectTime);
  };

  return (
    <ConteinerCardCustomerHistory
      as={motion.li}
      layout
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <h2>{projectName}</h2>
      <span>Valor: {priceFormated.format(budget)}</span>
      <span ref={ref}>N°:{id}</span>
      <div>
        <FaRegEdit
          onClick={() => openEditModal(id, projectName, budget, projectTime)}
        />
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
    </ConteinerCardCustomerHistory>
  );
};
