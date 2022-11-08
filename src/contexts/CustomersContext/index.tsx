import { createContext, useContext } from 'react';
import { ICustomerContext, ICustomerProvider } from './interfaces';

const CustomerContext = createContext<ICustomerContext>(
    {} as ICustomerContext
);

export const useCustomerContext = () => {
    const context = useContext(CustomerContext);
    return context;
}

export const CustomerProvider = ({ children }: ICustomerProvider) => {

    return (
        <CustomerContext.Provider value={{}}>
            { children }
        </CustomerContext.Provider>
    )
}