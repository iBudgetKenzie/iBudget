import styled from "styled-components";

export const ContainerBudgetHistory = styled.div`
  background-color: rgba(var(--color-purple), 1);
  width: 38.5vw;
  height: 79vh;
  border: 1px solid rgba(var(--color-purple), 1);

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
      background-color: rgba(var(--color-grey-1), 1);
      border-radius: 0px 8px 8px 0px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(var(--color-grey-2), 1);
      border-radius: 6px;
      border: 3px solid rgba(var(--color-grey-1), 1);
    }

    scrollbar-width: thin;
    scrollbar-color: rgba(var(--color-grey-2), 1) rgba(var(--color-grey-1), 1);
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  width: 100%;
  margin-bottom: 10px;
  position: relative;

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  & > h2 {
    padding-top: 5px;
    font-family: var(--font-forms-base);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    display: flex;
    color: rgba(var(--color-text-white), 1);

    @media (max-width: 1023px) {
      position: absolute;
      bottom: 0;
      width: calc(100% - 140px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    position: relative;

    width: 40%;
    height: 30px;

    @media (max-width: 1023px) {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      height: 40px;
      width: 100%;
    }

    & > input {
      height: 27px;
      width: 100%;
      border-radius: 8px;
      border: 1px solid rgba(var(--color-purple), 1);
      padding: 3px 0px 3px 9px;

      position: absolute;

      font-family: var(--font-forms-base);
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 10px;
      color: rgba(var(--color-grey-1), 1);

      @media (max-width: 1023px) {
        height: 32px;
      }
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

      @media (max-width: 1023px) {
        width: 43px;

        & > svg {
          padding: 7.5px;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    height: 69px;
  }
`;
