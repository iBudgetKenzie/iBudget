import { createContext, ReactNode, useState, useContext } from "react";

interface IBudgetProvider {
    children: ReactNode;
}

interface IFixedCost {
    value: number;
    costDescription: string;
}

interface IVariableCost {
    value: number;
    costDescription: string;
}

interface IBudgetContext {
    // addFixedValue: () => void;
    // addVariableValue: () => void;
    fixedCost: number;
    variableCost: number;
    modalFixedCost: boolean;
    modalVariableCost: boolean;
    setModalFixedCost: (modalFixedValue: boolean) => void;
    setModalVariableCost: (modalVariableValue: boolean) => void;
}

export const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const BudgetProvider = ({children}: IBudgetProvider) => {
    // const [fixedCost, setFixedCost] = useState<IFixedCost[]>([]);
    // const [variableCost, setVariableCost] = useState<IVariableCost[]>([]);

    const [fixedCost, setFixedCost] = useState(0);
    const [variableCost, setVariableCost] = useState(0);

    const [modalFixedCost, setModalFixedCost] = useState(false);
    const [modalVariableCost, setModalVariableCost] = useState(false);
    
    // const addFixedValue = (): void => {
        
    // }

    // const addVariableValue = (): void => {

    // }

    return (
        <BudgetContext.Provider value={{ modalFixedCost, modalVariableCost, fixedCost, variableCost, setModalFixedCost, setModalVariableCost }}>
            {children}
        </BudgetContext.Provider>
    )
}