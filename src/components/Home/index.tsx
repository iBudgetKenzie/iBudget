import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { motion, AnimatePresence } from "framer-motion";

import { StyledContainer } from "./styles";

const HomeComponent = () => {
  return (
    <AnimatePresence>
      <StyledContainer
        as={motion.div}
        initial={{ y: -50, scale: 1, opacity: 0.5 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 0, scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <h1>Bem Vindo.</h1>
      <div className="main-text">
        <p>
          Dificuldades em gerar orçamentos mais precisos e profissionais para
          seus clientes?
        </p>
        <p>
          Com o iBudget você tem orçamentos pré-definidos e personalizados para
          seus projetos na palma da sua mão!
        </p>
      </div>

      <div className="main-contact">
        <div className="contacts">
          <p>iBudget@mail.com</p>
          <p>(21)55-9999-6675</p>
        </div>
        <div className="redes">
          <a href="https://pt-br.facebook.com" target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
        </div>
      </StyledContainer>
    </AnimatePresence>
  );
};

export default HomeComponent;
