import styled from "styled-components";

export const ContainerCreateBudget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 368px;
  max-height: 540px;
  padding: 21px 30px 30px 30px;
  background-color: rgba(var(--color-white), 1);

  border: 1px solid rgba(var(--color-purple), 1);
  border-radius: 8px;

  & h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    padding-bottom: 20px;
  }

  & > form {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    gap: 5px;
    background-color: rgba(var(--color-white), 1);

    border-radius: 8px;

    textarea:focus,
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;

      display: flex;
      align-items: flex-end;
    }

    span {
      color: rgba(var(--color-negative-pink), 1);
      padding-left: 2px;
    }

    input {
      height: 39px;
      border: 1px solid rgba(var(--color-purple), 1);
      border-radius: 5px;
      padding-left: 6px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      display: flex;
      align-items: flex-end;
      color: #786d6d;
    }

    & > div {
      height: 39px;
      max-width: 100%;
      display: flex;
      align-items: center;

      font-family: "Inter";
      font-size: 15px;

      position: relative;

      & > input {
        width: 100%;
        height: 100%;
        position: absolute;

        border: 1px solid rgba(var(--color-purple), 1);
        border-radius: 5px;
        padding-left: 6px;
      }

      & > svg {
        position: absolute;
        right: 12px;
        top: 10px;
        width: 16px;
        height: 16px;

        cursor: pointer;
      }
    }

    & button {
      background-color: rgba(var(--color-purple), 1);
      border-radius: 8px;
      height: 48px;
      margin-top: 22px;
      border: none;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: aliceblue;

      cursor: pointer;

      &:hover {
        background-color: rgba(var(--color-purple-light), 1);
      }
    }
  }

  @media (max-width: 375px) {
    width: 100vw;
  }
`;

export const ConteinerDate = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;

  & > div {
    height: 55px;
    width: 140px;

    & label {
      padding-bottom: 5px;
    }

    & > input {
      display: flex;
      align-items: center;

      width: 100%;
      padding: 0 6px;
    }
  }

  @media (max-width: 375px) {
    & div {
      width: 38vw;
    }
  }
`;

export const ConteinerWorkTime = styled.div`
  margin-top: 23px;
  display: flex;
  justify-content: space-between;

  & > div {
    height: 55px;
    width: 140px;

    & label {
      padding-bottom: 5px;
    }

    & > input {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      padding: 0 6px;
    }
  }

  & > div + div {
    & > input {
      padding-left: 2.9rem;
    }
  }

  @media (max-width: 375px) {
    & div {
      width: 38vw;
    }
  }
`;
