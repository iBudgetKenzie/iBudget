import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4.188rem;

  display: flex;
  justify-content: space-between;

  background-color: rgba(var(--color-purple-dark), 1);

  & img {
    width: 8.813rem;
    height: 2.875rem;

    margin-left: 1.438rem;
    margin-top: 0.625rem;

    @media (min-width: 320px) {
      & {
        margin-left: 1rem;
        width: 6.5rem;
      }
    }
  }

  & > div {
    width: 250px;

    color: rgba(var(--color-purple-dark), 1);

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 12px;
    gap: 5px;

    @media (min-width: 400px) {
      & {
        gap: 1rem;
      }
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 450;
      font-size: 0.75rem;
      line-height: 17px;

      color: rgba(var(--color-white), 1);

      &:hover,
      &:focus {
        opacity: 0.5;
        cursor: pointer;
      }
      
      @media (min-width: 475px) {
        font-size: 0.88rem;
      }
    }

    img {
      width: 40px;
      height: 40px;
      margin-left: 0px;
      margin-top: 0px;
      cursor: pointer;
      border-radius: 50px;

      &:hover,
      &:focus {
        opacity: 0.5;
        cursor: pointer;
      }
    }

    button {
      border: none;

      background-color: transparent;

      text-decoration: underline;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 17px;

      color: rgba(var(--color-purple-light), 1);

      cursor: pointer;

      @media (min-width: 475px) {
        font-size: 0.88rem;
      }
    }
  }
`;
