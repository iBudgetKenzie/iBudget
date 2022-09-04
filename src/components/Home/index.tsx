import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { StyledContainer } from "./styles";

const HomeComponent = () => {
  return (
    <StyledContainer>
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
      </div>
    </StyledContainer>
  );
};

export default HomeComponent;
