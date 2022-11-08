import { HeaderLogged } from "../../components/HeaderLogged";
import { DashboardMobile } from "../../components/DashboardMobile/index";
import { useWindowSize } from "../../hooks/useWindowSize";

import { DashboardCustomers } from "../../components/DashboardCustomers";

const Dashboard = () => {
  const [, width] = useWindowSize();

  return width > 1023 ? (
    <>
      <HeaderLogged />
      <DashboardCustomers />
    </>
  ) : (
    <DashboardMobile />
  );
};

export default Dashboard;
