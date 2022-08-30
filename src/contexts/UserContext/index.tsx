import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

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
  projectTime: string;
  fixedCost: string;
  variableCost: string;
  userId: string | number;
}

export interface ILoginForm {}

export interface IRegisterForm {}

interface IUserProviderData {
  user: IUser;
  setUser: (user: IUser) => void;
  onSubmitLogin: (loginFormData: ILoginForm) => void;
  onSubmitRegister: (registerFormData: IRegisterForm) => void;
  handleSignOut: () => void;
}

export interface ILoginData {
  token: string | number;
  user: IUser;
}

const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

export const useUserContext = (): IUserProviderData => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect((): void => {
    // function to get the user here
  });

  const onSubmitLogin = (loginFormData: ILoginForm): void => {
    // function to login here
  };

  const onSubmitRegister = (registerFormData: IRegisterForm): void => {
    // function to register new user here
  };

  const handleSignOut = (): void => {
    // function to logout
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        onSubmitLogin,
        onSubmitRegister,
        handleSignOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
