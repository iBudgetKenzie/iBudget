import { appendFile } from "fs";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



import iBudgetApi from "../../services/iBudgetApi";

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  email: string;
  password?: string;
  name: string;
  username: string;
  position: string;
  imageUrl: string;
  id: string | number;
  budgets?: IBudget[];
}

export interface IBudget {
  projectName: string;
  projectTime: number;
  fixedCost: number;
  variableCost: number;
  userId: string | number;
}

export interface ILoginForm {}

export interface IRegisterForm {}

interface IUserProviderData {
  user: IUser;
  isAuthenticated: boolean;
  isHome: boolean;
  isLogin: boolean;
  isCadastro: boolean;
  isSobre: boolean;
  setUser: (user: IUser) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsHome: (isHome: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  setIsSobre: (isSobre: boolean) => void;
  setIsCadastro: (isCadastro: boolean) => void;
  onSubmitLogin: (loginFormData: ILoginForm) => void;
  onSubmitRegister: (registerFormData: IRegisterForm) => void;
  handleSignOut: () => void;
}

export interface ILoginData {
  accessToken: string;
  user: IUser;
}



export const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

export const useUserContext = (): IUserProviderData => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isAuthenticated , setIsAuthenticated] = useState<boolean>(false);
  const [isHome, setIsHome]         = useState<boolean>(true);
  const [isLogin, setIsLogin]       = useState<boolean>(false);
  const [isCadastro, setIsCadastro] = useState<boolean>(false);
  const [isSobre, setIsSobre]       = useState<boolean>(false);
  const [loading, setLoading]       = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect((): void => {
    async function loadUser () {
      const token: string | null = localStorage.getItem("@token")
      const id: string | null = localStorage.getItem("@id")
      
        if(typeof token === "string" && typeof id === "string"){
          try {
            iBudgetApi.defaults.headers.common.authorization = `Bearer ${token}`
            const userResponse = await iBudgetApi.get(`/users/${id}?_embed=budgets`)
            console.log(userResponse.data)
            setUser(userResponse.data)
          } catch (error) {
            console.log("erro")
          }
        }
      setLoading(false)
    }
    loadUser();
  }, [navigate]);
  
  console.log(user)
  
  const onSubmitLogin = async (loginFormData: ILoginForm) => {
    try {
      const response = await iBudgetApi.post<ILoginData>("/login", loginFormData);
      localStorage.clear();

      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@id", JSON.stringify(response.data.user.id))
      
      setUser(response.data.user)
      navigate("/dashboard");
      toast.success("Login realizado com sucesso");
      setIsAuthenticated(true);

    } catch (error) {
      toast.error("Usuário não encontrado");
    }
  };

  const onSubmitRegister = (registerFormData: IRegisterForm): void => {
    // function to register new user here
  };

  const handleSignOut = (): void => {
    setIsAuthenticated(false)
    setIsLogin(false)
    setIsHome(true)
    localStorage.clear();
    navigate("/home")
    window.location.reload();
    
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        isHome,
        setIsHome,
        isLogin,
        setIsLogin,
        isCadastro,
        setIsCadastro,
        isSobre,
        setIsSobre,
        onSubmitLogin,
        onSubmitRegister,
        handleSignOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// export default UserContext;
