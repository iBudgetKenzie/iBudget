import styled from "styled-components";

export const Header = styled.header`
    width:100%;
    height:4.188rem;

    display:flex;
    justify-content:space-between;

    margin-bottom:2rem;

    background-color:rgba(var(--color-purple-dark),1);

    & img {
        width:8.813rem;
        height: 2.875rem;

        margin-left:1.438rem;
        margin-top:0.625rem;

        @media (min-width:320px)  { 
            & {
                
                margin-left:1rem;
            }
        }
    }

    div {
        width:300px;

        color:rgba(var(--color-purple-dark),1);

        display:flex;
        align-items:center;
        justify-content:center;
        gap:1rem;
        
        @media (min-width:320px)  { 
            & {
                gap:5px;;
                margin-left:-1rem;
            }
        }

        p {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 450;
          font-size: 14px;
          line-height: 17px;

          color:rgba(var(--color-white),1);
        }

        img {
            width:54px;
            height:54px;
            margin-left:0px;
            margin-top:0px;

            border-radius:50px;
        }

        a {
            border:none;

            background-color:transparent;

            text-decoration:underline;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;

            color:rgba(var(--color-purple-light),1);

            cursor:pointer;
        }

    }
`