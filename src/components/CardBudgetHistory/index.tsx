import { MdOutlinePictureAsPdf } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";
import { IBudget } from "../../contexts/UserContext/index";

import { useBudgetContext } from "../../contexts/BudgetContext";

import { ConteinerCardBudgetHistory } from "./style";

export const CardBudgetHistory = ({
  projectName,
  budget,
  id,
  projectTime,
}: IBudget) => {
  const { deleteBudgetHistory, generatePDF } = useBudgetContext();
  return (
    <ConteinerCardBudgetHistory>
      <h2>{projectName}</h2>
      <span>Valor: {budget}</span>
      <span>N°:{id}</span>
      <div>
        <MdOutlinePictureAsPdf
          onClick={() => {
            const newDate = {
              projectName,
              budget,
              projectId: id,
              projectTime,
            };

            generatePDF(newDate)
          }}
        />
        <GoTrashcan onClick={() => deleteBudgetHistory(id)} />
      </div>
    </ConteinerCardBudgetHistory>
  );
};
