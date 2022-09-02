import styled from "styled-components";

export const ConteinerCardBudgetHistory = styled.li`
  height: 89px;

  border: 1px solid rgba(var(--color-purple), 1);
  background-color: rgba(var(--color-purple), 0.45);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 16px 16px 16px 20px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #474545;
  }

  & > h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  & > span + span {
    font-weight: 200;
    color: #524e4e;
  }

  & > div {
    position: absolute;
    right: 15px;
    display: flex;
    gap: 10px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
