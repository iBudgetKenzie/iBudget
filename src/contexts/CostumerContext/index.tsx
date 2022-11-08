import { createContext, useContext } from 'react';

import { 
    ICostumerPovider, 
    ICostumerContext 
} from './interfaces';

const CostumerContext = createContext<ICostumerContext>(
    {} as ICostumerContext
);

export const useCostumerContext = () => {
    const context = useContext(CostumerContext);
    return context;
}

export const CostumerProvider = ({ children }: ICostumerPovider) => {
    return (
        <CostumerContext.Provider value={{}}>
            { children }
        </CostumerContext.Provider>
    );
}