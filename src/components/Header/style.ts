import styled from 'styled-components'

export const ContainerHeader = styled.div`
    display:flex;
    justify-content:space-between;

    width:100%;

    & h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        color: #1A7E9E;

        margin-left:8rem;

        & span {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;

            color: #08090A;
        }
    }

    & div {
        display:flex;
        justify-content:center;
        align-items:center;

        margin-right:8rem;

        & button {
           border:none;
           
           height:2rem;

           font-family: 'Inter';
           font-style: normal;
           font-weight: 600;
           font-size: 15px;

           cursor: pointer;

           color:#F61818;
        }

        & span{
            margin-top:0.2rem;
        }

        & h4{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 15px;

            color:#000000;
        }
        & img {
            width:2rem;
            height:2rem;

            background-color:red;

            border-radius:50px;
            margin-left:0.5rem;
            margin-top:0.1rem;
            margin-right:0px;
        }
    }

`