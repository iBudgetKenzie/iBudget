import { motion } from "framer-motion";

import logo from "../../assets/img/logo.svg";

import { useUserContext } from "../../contexts/UserContext";
import { Header } from "./styled";

const HeaderL = () => {
  const { user, handleSignOut } = useUserContext();

  return (
    <Header
      as={motion.header}
      initial={{ y: -50, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <img src={logo} alt="Logo ibudget" />
      <div>
        <p>Olá, {user.username}!</p>
        <img src={user.imageUrl} alt="" />
        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </div>
    </Header>
  );
};

export default HeaderL;
