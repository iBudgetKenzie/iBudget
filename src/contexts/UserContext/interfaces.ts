import { ReactNode } from "react";

export interface IUserProviderProps {
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
  fixedCost: number | string;
  variableCost: number | string;
  budget: number;
  id: string | number;
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

export interface IUserProviderData {
  customersHistory: IBudget[];
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
  setCustomersHistory: (budgetHistory: IBudget[]) => void;
  onSubmitLogin: (loginFormData: ILoginForm) => void;
  onSubmitRegister: (registerFormData: IRegisterForm) => void;
  handleSignOut: () => void;
}

export interface ILoginData {
  accessToken: string;
  user: IUser;
}
