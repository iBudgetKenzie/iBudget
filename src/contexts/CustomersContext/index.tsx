import { createContext, useContext, useState } from "react";
import { ICreateCustomer, ICustomerContext, ICustomerProvider } from "./interfaces";
import iBudgetApi from "../../services/iBudgetApi";

const CustomerContext = createContext<ICustomerContext>({} as ICustomerContext);

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  return context;
};

export const CustomerProvider = ({ children }: ICustomerProvider) => {
  const [customersList, setCustomerList] = useState<ICreateCustomer[]>([]);
  const [onCreateCustomer, setOnCreateCustomer] = useState<boolean>(true);

  const sendCustomer = async () => {
    const token = localStorage.getItem('Token')
    const createCustomer = await iBudgetApi.post('/customers',
    {
        headers : {
          Authorization: `Bearer: ${token}`
        }
      })
  };


  const listCustomers = async (): Promise<void> => {
    const token = localStorage.getItem('Token')
    const customerResponse = await iBudgetApi.get('/customers', {
        headers : {
          Authorization: `Bearer: ${token}`
        }
      })
      .then(res => res)
      .catch(error => console.log(error))
      // setCustomerList(customerResponse)
  }

    
  return (
    <CustomerContext.Provider
      value={{
        sendCustomer,
        onCreateCustomer,
        setOnCreateCustomer
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
