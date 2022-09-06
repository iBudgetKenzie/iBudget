import styled from "styled-components";

export const ConteinerHistoryMobile = styled.section`
    width: 60vh;
    padding-top: 21px;
        
    & > h2 {
        padding-bottom: 5px;
        text-align: right;
        color: rgba(var(--color-text-white), 1);
        text-decoration: underline;
        top: 8.6rem;
        padding-left: 17rem;
        z-index: 100;
        white-space: nowrap;

        position: fixed;

        cursor: pointer;

        @media (max-width: 610px) {
            padding-right: 17px;
            right: 0;
        }
    }

    & > div {
        width: 100%;
    }

    @media (max-width: 610px) {
        width: 100%;
    }  
`