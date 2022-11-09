import { ReactNode } from 'react';

export interface ICreateCustomer {
    name: string;
    isCompany: boolean;
    email: string;
    contact: string;
}

export interface ICustomerProvider {
    children: ReactNode
}

export interface ICustomerContext {
    sendCustomer: (data: ICreateCustomer) => void;
}