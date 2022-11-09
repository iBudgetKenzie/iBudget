import { 
    createContext, 
    useContext, 
    useState 
} from 'react';
import { ICustomerContext, ICustomerProvider } from './interfaces';

const CustomerContext = createContext<ICustomerContext>(
    {} as ICustomerContext
);

export const useCustomerContext = () => {
    const context = useContext(CustomerContext);
    return context;
}

export const CustomerProvider = ({ children }: ICustomerProvider) => {

    const sendCustomer = () => {

    }

    return (
        <CustomerContext.Provider value={{
            sendCustomer
        }}>
            { children }
        </CustomerContext.Provider>
    )
}