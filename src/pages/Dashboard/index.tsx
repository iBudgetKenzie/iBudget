import { HeaderLogged } from "../../components/HeaderLogged";
import { useWindowSize } from "../../hooks/useWindowSize";

import { DashboardCustomers } from "../../components/DashboardCustomers";
import { DashboardCustomerMobile } from '../../components/DashboardCustomerMobile/index';

const Dashboard = () => {
  const [, width] = useWindowSize();

  return width > 1023 ? (
    <>
      <HeaderLogged />
      <DashboardCustomers />
    </>
  ) : (
    <DashboardCustomerMobile />
  );
};

export default Dashboard;
