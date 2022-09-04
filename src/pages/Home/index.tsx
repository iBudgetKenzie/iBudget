import { motion, AnimatePresence } from "framer-motion";

import { useUserContext } from "../../contexts/UserContext";
import HomeComponent from "../../components/Home";
import LoginModal from "../../components/Login";
import AboutUs from "../../components/AboutUs";

import { StyledBody } from "./styles";
import logo from "../../assets/img/logo.svg";
import Register from "../../components/Register";

const Home = () => {
  const {
    isHome,
    isLogin,
    isRegister,
    isSobre,
    setIsHome,
    setIsLogin,
    setIsRegister,
    setIsSobre,
  } = useUserContext();

  const handleHome = () => {
    setIsHome(true);
    setIsLogin(false);
    setIsRegister(false);
    setIsSobre(false);
  };

  const handleLogin = () => {
    setIsHome(false);
    setIsLogin(true);
    setIsRegister(false);
    setIsSobre(false);
  };
  const handleCadastro = () => {
    setIsHome(false);
    setIsLogin(false);
    setIsRegister(true);
    setIsSobre(false);
  };
  const handleSobre = () => {
    setIsHome(false);
    setIsLogin(false);
    setIsRegister(false);
    setIsSobre(true);
  };

  return (
    <StyledBody
      as={motion.div}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      <section className="logo-div">
        <motion.img
          initial={{ y: -50, scale: 1, opacity: 0.5 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 0, scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.3 }}
          src={logo}
          alt="iBudget Kenzie"
        />
        <motion.p
          initial={{ y: -50, scale: 1, opacity: 0.5 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 0, scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.3 }}
          className="logo-paragraph"
        >
          O orçamento que cabe no seu bolso
        </motion.p>
      </section>
      <section className="header">
        <motion.header>
          <button className="header-menu" onClick={handleHome}>
            Home
          </button>
          <button className="header-menu" onClick={handleLogin}>
            Login
          </button>
          <button className="header-menu" onClick={handleCadastro}>
            Cadastro
          </button>
          <button className="header-menu" onClick={handleSobre}>
            Sobre nós
          </button>
        </motion.header>
        <AnimatePresence>
          <motion.div
            className="content"
            exit={{ x: "100vw" }}
            transition={{ duration: 1 }}
          >
            {isHome && <HomeComponent />}
            {isLogin && <LoginModal />}
            {isRegister && <Register />}
            {isSobre && <AboutUs />}
          </motion.div>
        </AnimatePresence>
      </section>
    </StyledBody>
  );
};

export default Home;
