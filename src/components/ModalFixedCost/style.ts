import styled from "styled-components";

export const ConteinerModalFixedCost = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 30rem;
    max-height: 30rem;
    background-color: rgba(var(--color-white), 1);
    border-radius: 8px;
    padding: 18px 27px 15px 27px;
    border: 1px solid rgba(var(--color-purple), 1);

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        & > h2 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 19px;
        } 

        & > span {
            position: absolute;

            right: 0;

            font-family: "Inter";
            font-weight: 600;
            font-size: 21px;
        }
    }
`

export const ConteinerFormModal = styled.div`
    padding-top: 20px;
    height: 100%;

    & > form {
        height: 22rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > button {
            border-radius: 10px;
            height: 40px;
            width: 100%;
            background-color: rgba(var(--color-purple), 1);

            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: rgba(var(--color-white), 1);
        }
    } 
`