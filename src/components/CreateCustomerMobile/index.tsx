import { motion } from "framer-motion";

import { ConteinerCreateMobile } from "../CreateBudgetMobile/style";
import { CreateCustomer } from '../CreateCustomer/index';
import { useCustomerContext } from '../../contexts/CustomersContext/index';

export const CreateCustomerMobile = () => {
  const { 
    setOnCreateCustomer,
    onCreateCustomer 
  } = useCustomerContext();

  return (
    <ConteinerCreateMobile
      as={motion.section}
      initial={{ x: "-50vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2
        onClick={() => setOnCreateCustomer(!onCreateCustomer)}
      >
        Histórico
      </h2>
      <CreateCustomer />
    </ConteinerCreateMobile>
  );
};
