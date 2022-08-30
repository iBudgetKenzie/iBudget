import styled from "styled-components";


export const StyledLogin = styled.div`

    background-color: rgba(217, 217, 217, 1);

    height: 280px;
    width: 250px;
    left: -796px;
    top: -267px;
    border-radius: 7px;
    padding: 30px;

    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 20px;
    
    margin-top: 100px;
    
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
            height: 26px;
            width: 175px;
            left: -774px;
            top: -215px;
            border-radius: 5px;
            padding: 10px;

            @media screen and (min-width: 700px) {
                height: 30px;
                width: 200px;
            }
        }

        button {
            height: 32px;
            width: 76px;
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

            background-color: rgba(26, 126, 158, 1);
            color:  rgba(217, 217, 217, 1);

        }
    }

`;


