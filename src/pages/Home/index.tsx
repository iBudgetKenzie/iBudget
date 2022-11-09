import { motion } from "framer-motion";

import { useUserContext } from "../../contexts/UserContext";
import HomeComponent from "../../components/Home";
import LoginModal from "../../components/Login";
import Register from "../../components/Register";
import AboutUs from "../../components/AboutUs";
import HomeMobile from "../../components/HomeMobile";
import { useWindowSize } from "../../hooks/useWindowSize";

import { StyledBody } from "./styles";
import logo from "../../assets/img/logo.svg";

const Home = () => {
  const [, width] = useWindowSize();
  
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

  return width > 768 ? (
    <StyledBody
      as={motion.div}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      <section className="logo-section">
        <img src={logo} alt="" />
        <p className="logo-paragraph">O orçamento que cabe no seu bolso</p>
      </section>
      <section className="header-section">
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

        <motion.div className="content">
          {isHome && <HomeComponent />}
          {isLogin && <LoginModal />}
          {isRegister && <Register />}
          {isSobre && <AboutUs />}
        </motion.div>
      </section>
    </StyledBody>
  ) : (
    <HomeMobile />
  );
};

export default Home;

          
