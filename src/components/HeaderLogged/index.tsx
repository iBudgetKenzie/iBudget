import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/img/logo.svg";

import ModalUserInfo from "../ModalUserInfo";
import { useUserContext } from "../../contexts/UserContext";
import { useBudgetContext } from "../../contexts/BudgetContext";
import { Header } from "./styled";

export const HeaderLogged = () => {
  const { user, handleSignOut, onModalUserInfo, setOnModalUserInfo } =
    useUserContext();

  const { setFixedCost, setVariableCost, setTotalDays } = useBudgetContext();

  const handleSignOutAndStates = () => {
    handleSignOut();
    setFixedCost(0);
    setVariableCost(0);
    setTotalDays("-");
  };

  return (
    <>
      <Header
        as={motion.header}
        initial={{ y: -50, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <img src={logo} alt="Logo ibudget" />
        <div>
          <p onClick={() => setOnModalUserInfo(true)}>Olá, {user.username}!</p>
          <img
            src={user.imageUrl}
            alt=""
            onClick={() => setOnModalUserInfo(true)}
          />
          <button type="button" onClick={handleSignOutAndStates}>
            Sair
          </button>
        </div>
      </Header>
      <AnimatePresence>{onModalUserInfo && <ModalUserInfo />}</AnimatePresence>
    </>
  );
};
