import styled from "styled-components";

export const ConteinerBudgetMobile = styled.section`
    width: 60vw;
    padding-top: 21px;
        
    & > h2 {
        padding-bottom: 5px;
        text-align: right;
        color: rgba(var(--color-text-white), 1);
        text-decoration: underline;
        cursor: pointer;
    }

    & > div {
        width: 100%;
    }

    @media (max-width: 610px) {
        width: 100%;
    } 
`