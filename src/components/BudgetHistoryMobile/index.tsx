import { motion } from "framer-motion";

import { BudgetHistory } from "../BudgetHistory";

import { ConteinerHistoryMobile } from "./style";

export const BudgetHistoryMobile = () => {
  return (
    <ConteinerHistoryMobile
      as={motion.section}
      initial={{ x: "50vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BudgetHistory />
    </ConteinerHistoryMobile>
  );
};
