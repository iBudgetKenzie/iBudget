import { motion } from "framer-motion";
import { CustomerHistory } from '../CustomerHistory/index';

import { ConteinerHistoryMobile } from "./style";

export const CustomerHistoryMobile = () => {
  return (
    <ConteinerHistoryMobile
      as={motion.section}
      initial={{ x: "50vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CustomerHistory />
    </ConteinerHistoryMobile>
  );
};
