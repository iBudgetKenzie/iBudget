import { MdOutlinePictureAsPdf } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";
import { IBudget } from "../../contexts/UserContext/index";


import { ConteinerCardBudgetHistory } from "./style";

export const CardBudgetHistory = ({ projectName, budget, id }: IBudget) => {
  return (
    <ConteinerCardBudgetHistory>
      <h2>{projectName}</h2>
      <span>Valor: {budget}</span>
      <span>N°:{id}</span>
      <div>
        <MdOutlinePictureAsPdf />
        <GoTrashcan />
      </div>
    </ConteinerCardBudgetHistory>
  );
};
