import { HeaderLogged } from "../HeaderLogged";
import { CustomerHistoryMobile } from '../CustomerHistoryMobile/index';

import { MainConteinerMobile } from "./style";
import { CreateCustomerMobile } from '../CreateCustomerMobile/index';
import { useCustomerContext } from '../../contexts/CustomersContext/index';

export const DashboardCustomerMobile = () => {
  const { onCreateCustomer } = useCustomerContext();
  return (
    <>
      <HeaderLogged />
      <main>
        <MainConteinerMobile>
          {onCreateCustomer ? <CreateCustomerMobile /> : <CustomerHistoryMobile />}
        </MainConteinerMobile>
      </main>
    </>
  );
};
