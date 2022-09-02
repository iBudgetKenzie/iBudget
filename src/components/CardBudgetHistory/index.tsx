import { MdOutlinePictureAsPdf } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";

import { ConteinerCardBudgetHistory } from "./style";

export const CardBudgetHistory = () => {
  return (
    <ConteinerCardBudgetHistory>
      <h2>Nome do Projeto</h2>
      <span>Valor: R$ 2.350,00</span>
      <span>N°:0001</span>
      <div>
        <MdOutlinePictureAsPdf />
        <GoTrashcan />
      </div>
    </ConteinerCardBudgetHistory>
  );
};
