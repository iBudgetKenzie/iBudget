import styled from "styled-components";

export const ConteinerCardBudgetHistory = styled.li`
  height: 89px;

  border: 1px solid rgba(var(--color-purple), 1);
  background-color: rgba(var(--color-purple), 0.45);
  box-shadow: 0px 4px 4px rgba(var(--color-black), 0.25);
  border-radius: 8px;
  padding: 16px 16px 16px 20px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  padding-right: 7rem;

  span {
    font-family: var(--font-forms-base);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: rgba(var(--color-grey-3), 1);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > h2 {
    font-family: var(--font-forms-base);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > span + span {
    font-weight: 200;
    color: rgba(var(--color-grey-2), 1);
  }

  & > div {
    position: absolute;
    right: 15px;
    display: flex;
    gap: 10px;

    & > svg {
      width: 20px;
      height: 20px;
      background-color: transparent;
      cursor: pointer;
    }

    & > button:hover {
      color: rgba(var(--color-text-white));
    }
  }
`;
