import styled from "styled-components";

export const ContainerCreateBudget = styled.div`
    width: 350px;

    form {
        display: flex;
        flex-direction: column;
        padding: 25px;
        gap: 5px;
        border: 1px solid #CEBEBE;
        border-radius: 8px;

        & input {
            height: 30px;
            max-width: 100%;
            border: 1px solid #CEBEBE;
            border-radius: 8px;
            padding-left: 6px;
            font-family: "Inter";
            font-size: 15px;

        }

        & label {
            font-family: "Inter";
        }

        & div {
            display: flex;
            position: relative;

            & input {
                width: 80%;
            }

            & svg {
                height: 30px;
                width: 30px;
                position: absolute;
                right: 0;
            }
        }

        & button {
            background: #1A7E9E;
            border-radius: 8px;
            height: 35px;
            margin-top: 10px;
            font-family: "Inter";
            font-size: 15px;
            font-weight: 600;
            color: aliceblue;
            border: none;
        }
    }
`