import styled from "styled-components";

export const ContainerBudgetHistory = styled.div`
    background-color: rgba(var(--color-purple), 1);
    width: 35rem;
    max-height: 30.8rem;

    & > ul {
        display: flex;
        flex-direction: column;
        gap: 10px;

        background-color: rgba(var(--color-white), 1);
        height: 92.8%;
        border-radius: 8px;

        padding: 30px 20px;

        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 12px;
        }

        &::-webkit-scrollbar-track {
            background-color: #DBDADA;
            border-radius: 0px 8px 8px 0px
        }

        &::-webkit-scrollbar-thumb {
            /* background-color: rgba(var(--color-purple-dark), 1); */
            background-color: #786D6D;
            border-radius: 6px;
            border: 3px solid #DBDADA;
        }

        scrollbar-width: thin;
        scrollbar-color: #786D6D #DBDADA;
    }
`

export const FilterBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    margin-bottom: 10px;

    textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    & > h2 {
        padding-top: 5px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 19px;
        display: flex; 
        color: rgba(var(--color-text-white), 1);
    }

    & > div {
        display: flex;
        align-items: center;
        position: relative;

        width: 35%;
        height: 88%;
        
        & > input {
            height: 24px;
            width: 100%;
            border-radius: 8px;
            padding: 3px 0px 3px 9px;

            position: absolute;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 10px;
            color: #524E4E;
        }

        & > span {
            display: flex;
            align-items: center;
            justify-content: center;
            
            background-color: rgba(var(--color-purple), 1);
            border: 3.5px solid rgba(var(--color-purple), 1);

            position: absolute;
            z-index: 100px;
            right: 0;
            top: 0;
            border-radius: 50% 0% 0% 50%;
            height: 100%;
            width: 32px;
            
            color: rgba(var(--color-text-white), 1);

            & > svg {
                background-color: rgba(var(--color-purple-dark), 1);
                border-radius: 50%;
                padding: 4px;
            }
        }
    }
`;
