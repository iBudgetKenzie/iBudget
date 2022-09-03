import styled from "styled-components";

export const MainConteiner = styled.div`
    display: flex;
    justify-content: space-between;
    

    & > section {
        padding-top: 41px;
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 50%;
    }

    & > section + section {
        padding-top: 41px;
        display: flex;
        justify-content: center;
        background-color: rgba(var(--color-purple), 1);
        height: 100vh;
        width: 50%;
    }
`
