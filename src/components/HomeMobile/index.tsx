import { motion } from "framer-motion";
import logo from "../../assets/img/logo.svg";
import { useUserContext } from "../../contexts/UserContext";
import AboutUs from "../AboutUs";
import HomeComponent from "../Home";
import LoginModal from "../Login";
import Register from "../Register";
import { StyledBodyMobile } from "./style";

const HomeMobile = () => {
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
    <StyledBodyMobile
      as={motion.div}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.3 }}
      transition={{ duration: 0.3 }}
    >
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
      <footer>
        <img src={logo} alt="" />
      </footer>
    </StyledBodyMobile>
  );
};

export default HomeMobile;
