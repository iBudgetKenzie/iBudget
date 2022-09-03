import styled from "styled-components";

export const InputMoreExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
  }

  & > input {
    height: 30px;
    border: 1px solid rgba(var(--color-purple), 1);
    background-color: rgba(var(--color-purple-light), 0.1);
    border-radius: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 12px;
    padding: 17px 0px 17px 10px;
  }

  @media (max-width: 480px) {
    width: 47%;
  }
`;
