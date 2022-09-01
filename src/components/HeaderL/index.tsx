import { Header } from "./styled";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useUserContext } from "../../contexts/UserContext";





const HeaderL = () => {

    const {user, handleSignOut} = useUserContext()



    return (
        <Header>
            <img src={logo} alt="Logo ibudget"/>
            <div>
                <p>Olá Dev!</p>
            <img src={user.imageUrl} alt=""/> 
            <a onClick={handleSignOut}>Sair</a> 
            </div>
        </Header>
    )
}

export default HeaderL;