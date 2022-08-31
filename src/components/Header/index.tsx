import { useState } from "react";
import { ContainerHeader } from "./style";



function Header() {

const [ isLogged, setIsLogged ]  = useState<boolean>(true)

    return (
        <>
        {isLogged === false ?
        <ContainerHeader >
            <h1><span>i</span>Budget</h1>
            <div>
                <button>Entrar</button>
                <span>/</span>
                <button>Cadastrar</button>
            </div>
        </ContainerHeader>
        :
        <ContainerHeader >
            <h1><span>i</span>Budget</h1>
            <div>
                <h4>Olá dev</h4>
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt=""></img>
                <button>Sair</button>
            </div>
        </ContainerHeader>
        }
        </>
    )
}

export default Header;