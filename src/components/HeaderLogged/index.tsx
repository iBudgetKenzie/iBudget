import logo from "../../assets/img/logo.svg";

import { useUserContext } from "../../contexts/UserContext";
import { Header } from "./styled";

const HeaderL = () => {
  const { user, handleSignOut } = useUserContext();

  return (
    <Header>
      <img src={logo} alt="Logo ibudget" />
      <div>
        <p>Olá, {user.username}!</p>s
        <img src={user.imageUrl} alt="" />
        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </div>
    </Header>
  );
};

export default HeaderL;
