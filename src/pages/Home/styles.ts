import styled from "styled-components";

export const StyledBody = styled.div`

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column-reverse; 

    color: white;

    .logo{
        width: 100%;
        height: 20%;
        background-color: rgb(30,30,30);
    };

    .header{
        width: 100%;
        height: 80%;
        background-color: rgb(122,99,255);

        header {
            display: flex;
            justify-content: space-around;
            height: 40px;
            align-items: center;
        }
    };

    .quadrado {
        height: 350px;
        width: 268px;
        left: 0px;
        top: 0px;
        border-radius: 7px;
        background-color: white;
        position: absolute;
    };
`;