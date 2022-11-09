import styled from "styled-components";

export const DivCompanyContact = styled.div`
    display: flex;
    flex-direction: row-reverse;

    div:nth-child(1) {
        width: 32%;
        padding: 24px 0 0 0;
        display: flex;
        align-items: center;

        label {
            width: 62%;
            margin: 0 5px 0 5px;
        }

        input {
            height: 30px;
            width: 30px;
        }
    }

    div:nth-child(2) {
        width: 65%;
    }
`