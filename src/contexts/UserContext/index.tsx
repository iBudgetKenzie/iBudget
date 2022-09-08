/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

import iBudgetApi from "../../services/iBudgetApi";
import userPng from "../../assets/img/user.png";
import {
  IBudget,
  ILoginData,
  ILoginForm,
  IRegisterForm,
  IUser,
  IUserProviderData,
  IUserProviderProps,
} from "./interfaces";

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
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
  const [isImage, setIsImage] = useState<string>("");
  const [budgetHistory, setBudgetHistory] = useState<IBudget[]>([]);
  const navigate = useNavigate();

  async function loadUser() {
    const token: string | null = localStorage.getItem("@token");
    const id: string | null = localStorage.getItem("@id");

    if (typeof token === "string" && typeof id === "string") {
      try {
        iBudgetApi.defaults.headers.common.authorization = `Bearer ${token}`;
        const userResponse = await iBudgetApi.get(
          `/users/${id}?_embed=budgets`
        );
        setUser(userResponse.data);
        setBudgetHistory(userResponse.data.budgets);
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect((): void => {
    loadUser();
  }, [navigate]);

  const onSubmitLogin = async (loginFormData: ILoginForm) => {
    try {
      const response = await iBudgetApi.post<ILoginData>(
        "/login",
        loginFormData
      );
      localStorage.clear();

      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@id", JSON.stringify(response.data.user.id));

      setUser(response.data.user);
      navigate("/dashboard");
      toast.success("Login realizado com sucesso!");
      setIsAuthenticated(true);
    } catch (err: unknown) {
      const errors = err as AxiosError;
      if (errors.response?.data === "Cannot find user")
        toast.error("Usuário não encontrado");
      if (errors.response?.data === "Incorrect password")
        toast.error("Senha incorreta");
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
    if (registerFormData.username) {
      const name = registerFormData.username.toLowerCase();
      const firstLetter = name.split("").splice(0, 1).toString().toUpperCase();
      const otherLetters = name.split("").splice(1).join("");
      const capitalLetter = firstLetter.concat(otherLetters);

      cadastro.username = capitalLetter;
    }

    if (registerFormData.imageUrl === "" && isImage === "") {
      cadastro.imageUrl = userPng;
    } else if (!registerFormData.imageUrl?.includes("http") && isImage === "") {
      cadastro.imageUrl = userPng;
    } else if (registerFormData.imageUrl === "" && isImage !== "") {
      cadastro.imageUrl = isImage;
    }

    try {
      await iBudgetApi.post("/register", cadastro);
      toast.success("Cadastro realizado com sucesso!");
      setIsRegister(false);
      setIsLogin(true);
    } catch (err: unknown) {
      const errors = err as AxiosError;
      if (errors.response?.data === "Email already exists") {
        toast.error("Email já cadastrado");
      } else {
        toast.error("Usuário não cadastrado");
      }
    }
  };

  const handleSignOut = (): void => {
    setIsAuthenticated(false);
    setIsLogin(false);
    setIsHome(true);
    localStorage.clear();
    navigate("/home");
  };

  return (
    <UserContext.Provider
      value={{
        setBudgetHistory,
        budgetHistory,
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
