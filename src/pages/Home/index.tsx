import { StyledBody } from "./styles";

const Home = () => {
  return (
    <StyledBody>
      <section className="logo">
        IBudget
        <p className="logo-paragraph">
          O orçamento que cabe no seu bolso
        </p>
      </section>
      <section className="header">
        <header>
          <p className="header-menu">Home</p>
          <p className="header-menu">Login</p>
          <p className="header-menu">Cadastro</p>
          <p className="header-menu">Sobre nós</p>
        </header>
        {/* <div className="quadrado">

        </div> */}
      </section>
    </StyledBody>
  );
};

export default Home;
