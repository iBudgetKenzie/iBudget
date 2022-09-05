import styled from "styled-components";

export const ContainerCreateBudget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 28vw;
  height: 79vh;
  padding: 20px 30px 30px 30px;
  background-color: rgba(var(--color-white), 1);

  border: 1px solid rgba(var(--color-purple), 1);
  border-radius: 8px;

  & h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;
    gap: 5px;
    background-color: rgba(var(--color-white), 1);

    border-radius: 9px;

    textarea:focus,
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;

      display: flex;
      align-items: flex-end;
    }

    span {
      color: rgba(var(--color-negative-pink), 1);
      font-size: 0.7rem;
    }

    input {
      height: 39px;
      border: 1px solid rgba(var(--color-purple), 1);
      border-radius: 5px;
      padding: 10px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      display: flex;
      align-items: flex-end;
      color: rgba(var(--color-grey-1), 1);
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & > div {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        /* height: 70px; */

        & > div {
          width: 100%;
          position: relative;

          & label {
            margin-bottom: 5px;
          }

          & > input {
            display: flex;
            align-items: center;

            width: 100%;
            padding: 10px;
          }

          & > svg {
            position: absolute;

            right: 10px;
            top: 31px;

            cursor: pointer;
          }

          @media (max-width: 375px) {
            width: 46%;
          }
        }
      }
    }

    & button {
      background-color: rgba(var(--color-purple), 1);
      border-radius: 8px;
      height: 12%;
      margin-top: 20px;
      border: none;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 0.88rem;
      line-height: 17px;

      color: rgba(var(--color-white), 1);

      &:hover {
        background-color: rgba(var(--color-purple-light), 1);
      }
    }
  }

  @media (max-width: 375px) {
    width: 100vw;
  }
`;
