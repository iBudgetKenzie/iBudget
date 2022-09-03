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

import userPng from "../../assets/img/user.png";

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
  projectTime?: number;
  fixedCost?: number;
  variableCost?: number;
  budget?: string;
  id: string | number
  userId?: string | number | null;
}

export interface ILoginForm {}

export interface IRegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  position?: string;
  imageUrl?: string;
}

interface IUserProviderData {
  user: IUser;
  isAuthenticated: boolean;
  isHome: boolean;
  isLogin: boolean;
  isRegister: boolean;
  isSobre: boolean;
  isImage: string;
  setUser: (user: IUser) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsHome: (isHome: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  setIsSobre: (isSobre: boolean) => void;
  setIsRegister: (isRegister: boolean) => void;
  setIsImage: (isImage: string) => void;
  onSubmitLogin: (loginFormData: ILoginForm) => void;
  onSubmitRegister: (registerFormData: IRegisterForm) => void;
  handleSignOut: () => void;
}

export interface ILoginData {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData,
);

export const useUserContext = (): IUserProviderData => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [isSobre, setIsSobre] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isImage, setIsImage] = useState<string>("");
  const navigate = useNavigate();

  useEffect((): void => {
    async function loadUser() {
      const token: string | null = localStorage.getItem("@token");
      const id: string | null = localStorage.getItem("@id");

      if (typeof token === "string" && typeof id === "string") {
        try {
          iBudgetApi.defaults.headers.common.authorization = `Bearer ${token}`;
          const userResponse = await iBudgetApi.get(
            `/users/${id}?_embed=budgets`,
          );
          // console.log(userResponse.data);
          setUser(userResponse.data);
        } catch (error) {
          console.log("erro");
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [navigate]);

  console.log(user);

  const onSubmitLogin = async (loginFormData: ILoginForm) => {
    try {
      const response = await iBudgetApi.post<ILoginData>(
        "/login",
        loginFormData,
      );
      localStorage.clear();

      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@id", JSON.stringify(response.data.user.id));

      setUser(response.data.user);
      navigate("/dashboard");
      toast.success("Login realizado com sucesso");
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("Usuário não encontrado");
    }
  };

  const onSubmitRegister = async (registerFormData: IRegisterForm) => {
    const cadastro = {
      name: registerFormData.name,
      username: registerFormData.username,
      email: registerFormData.email,
      password: registerFormData.password,
      position: registerFormData.position,
      imageUrl: registerFormData.imageUrl,
    };
    if(registerFormData.username){
      const name = registerFormData.username.toLowerCase()
      const firstLetter = name.split("").splice(0,1).toString().toUpperCase()
      const otherLetters = name.split("").splice(1).join("")
      const capitalLetter = firstLetter.concat(otherLetters)

      cadastro.username = capitalLetter
    }
    if (registerFormData.imageUrl === "" && isImage === "") {
      cadastro.imageUrl = userPng;
    } else if (registerFormData.imageUrl === "" && isImage !== "") {
      cadastro.imageUrl = isImage;
    }
    try {
      const response = await iBudgetApi.post("/register", cadastro);
      // console.log(response)
      toast.success("Cadastro realizado com sucesso");
      setIsRegister(false);
      setIsLogin(true);

      // console.log(response)
    } catch (error) {
      toast.error("Cadastro não realizado");
    }
  };

  const handleSignOut = (): void => {
    setIsAuthenticated(false);
    setIsLogin(false);
    setIsHome(true);
    localStorage.clear();
    navigate("/home");
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
        isRegister,
        setIsRegister,
        isSobre,
        setIsSobre,
        isImage,
        setIsImage,
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
