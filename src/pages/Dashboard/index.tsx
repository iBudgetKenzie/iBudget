import { HeaderLogged } from "../../components/HeaderLogged";
import { DashboardMobile } from "../../components/DashboardMobile/index";
import { DeshboardBudget } from "../../components/DeshboardBudget";
import { useWindowSize } from "../../hooks/useWindowSize";

const Dashboard = () => {
  const [, width] = useWindowSize();

  return width > 1023 ? (
    <>
      <HeaderLogged />
      <DeshboardBudget />
    </>
  ) : (
    <DashboardMobile />
  );
};

export default Dashboard;
