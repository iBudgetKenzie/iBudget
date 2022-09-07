import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

import { StyledContainer } from "./styles";

const HomeComponent = () => {
  return (
    <StyledContainer
      as={motion.div}
      initial={{ y: -50, scale: 1, opacity: 0.5 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: 0, scale: 1, opacity: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Bem Vindo(a).</h1>
      <div className="main-text">
        <p>
          Dificuldades em gerar orçamentos mais precisos e profissionais para
          seus clientes?
        </p>
        <p>
          Cadastrando no iBudget você terá orçamentos pré-definidos e 100%
          personalizados para seus projetos na palma da sua mão!
        </p>
      </div>

      <div className="main-contact">
        <div className="contacts">
          <p>iBudget@mail.com</p>
          <p>(99) 99-9999-9999</p>
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
      </div>
    </StyledContainer>
  );
};

export default HomeComponent;
