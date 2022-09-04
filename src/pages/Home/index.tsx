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
    <StyledBody>
      <section className="logo-section">
        <img src={logo} alt="" />
        <p className="logo-paragraph">O orçamento que cabe no seu bolso</p>
      </section>
      <section className="header-section">
        <header>
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
        </header>

        <div className="content">
          {isHome && <HomeComponent />}
          {isLogin && <LoginModal />}
          {isRegister && <Register />}
          {isSobre && <AboutUs />}
        </div>
      </section>
    </StyledBody>
  );
};

export default Home;
