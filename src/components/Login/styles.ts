import styled from "styled-components";


export const StyledLogin = styled.div`

    background-color: rgba(255,255,255, 1);
    color: black;

    height: 280px;
    width: 300px;
    left: -796px;
    top: -267px;
    border-radius: 7px;
    padding: 30px;

    
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: auto; */
    gap: 16px;
    
    margin-top: 30px;
    
    @media screen and (min-width: 700px) {
        height: 350px;
        width: 330px;

        h4 {
            margin-top: 25px;
            font-size: 20px;
        }

    }

    form {
        display: flex;
        flex-direction: column;
        gap: 5px;

        @media screen and (min-width: 700px) {
            height: 200px;
            justify-content: space-around;
        }

        input {
            height: 30px;
            width: 240px;
            left: -774px;
            top: -215px;
            border-radius: 5px;
            padding: 10px;

            border: solid 1px rgb(188,176,255);

            @media screen and (min-width: 700px) {
                height: 30px;
                width: 200px;
            }
        }

        span {
            font-size: 13px;
            color: #F61818;
        }

        p {
            font-size: 14px;
            margin-left: 16px;
        }

        .cadastro{
            background-color: white;
            color: rgb(122,99,255);
        }

        .login {
            height: 32px;
            width: 80px;
            left: -729px;
            top: -126px;
            border-radius: 8px;
            margin-top: 10px;
            font-size: 14px;

            @media screen and (min-width: 700px) {
                height: 35px;
                width: 85px;
            }

            align-self: center;

            background-color: rgb(122,99,255);
            color:  rgba(217, 217, 217, 1);

        }
    }

`;

export const StyledContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;


