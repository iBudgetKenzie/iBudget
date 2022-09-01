import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



import iBudgetApi from "../../services/iBudgetApi";

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  username: string;
  position: string;
  imageUrl: string;
  id: string | number;
  budgets: IBudget[];
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
  accessToken: string | number;
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
  const navigate = useNavigate();

  useEffect((): void => {
    // function to get the user here
  });

  const onSubmitLogin = async (loginFormData: ILoginForm) => {
    try {
      const response = await iBudgetApi.post("/login", loginFormData);
      localStorage.clear();
      localStorage.setItem("@token", response.data.accessToken);
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
