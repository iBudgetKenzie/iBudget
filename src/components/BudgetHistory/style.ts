import styled from "styled-components";

export const ContainerBudgetHistory = styled.div`
  background-color: rgba(var(--color-purple), 1);
  width: 37vw;
  height: 74.5vh;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: rgba(var(--color-white), 1);
    height: 92.8%;
    border-radius: 8px;

    padding: 30px 20px;

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: #dbdada;
      border-radius: 0px 8px 8px 0px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(var(--color-purple-dark), 1);
      background-color: #786d6d;
      border-radius: 6px;
      border: 3px solid #dbdada;
    }

    scrollbar-width: thin;
    scrollbar-color: #786d6d #dbdada;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  margin-bottom: 10px;

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  & > h2 {
    padding-top: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    display: flex;
    color: rgba(var(--color-text-white), 1);
  }

  & > div {
    display: flex;
    align-items: center;
    position: relative;

    width: 35%;
    height: 88%;

    & > input {
      height: 27px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid rgba(var(--color-purple), 1);
      padding: 3px 0px 3px 9px;

      position: absolute;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 10px;
      color: #524e4e;
    }

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: rgba(var(--color-purple), 1);
      border: 3.5px solid rgba(var(--color-purple), 1);

      position: absolute;
      z-index: 100px;
      right: 0;
      top: 0;
      border-radius: 50% 0% 0% 50%;
      height: 100%;
      width: 32px;

      color: rgba(var(--color-text-white), 1);

      & > svg {
        background-color: rgba(var(--color-purple-dark), 1);
        border-radius: 50%;
        padding: 4px;
      }
    }
  }
`;

// export const HistoricalBudgetList = styled.div`

// `
