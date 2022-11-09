import styled from "styled-components";

export const ContainerCustomertHistory = styled.div`
  background-color: rgba(var(--color-purple), 1);
  width: 38.5vw;
  height: 79vh;
  border: 1px solid rgba(var(--color-purple), 1);

  padding-bottom: 8px;

  & > div + div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: rgba(var(--color-white), 1);
    height: 92.8%;
    border-radius: 8px;

    padding: 30px 20px;

    overflow-y: auto;

    & > span {
      width: 100%;
      text-align: center;
    }

    & > p {
      width: 100%;
      word-wrap: break-word;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(var(--color-white), 1);
      border-radius: 0px 8px 8px 0px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(var(--color-grey-1), 1);
      border-radius: 6px;
      border: 3px solid rgba(var(--color-white), 1);
    }

    scrollbar-width: thin;
    scrollbar-color: rgba(var(--color-grey-2), 1) rgba(var(--color-grey-1), 1);
  }

  @media (max-width: 1023px) {
    border: none;
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

  div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;

    & > h2 {
      margin-top: 15px;
      display: flex;
      align-items: flex-end;
      font-size: 1.12rem;
      font-weight: 600;
      line-height: 19px;
      font-family: var(--font-forms-base);
      font-style: normal;
      display: flex;
      color: rgba(var(--color-text-white), 1);
      cursor: pointer;
    }

    & > h2 + h2 {
      display: flex;
      align-items: flex-end;
      padding: 0;
      white-space: nowrap;
      font-size: 0.88rem;
      text-decoration: underline;
    }

    @media (max-width: 377px) {
      h2:first-child {
        font-size: 0.88rem;
      }
    }

    @media (min-width: 1024px) {
      h2:first-child {
        padding-bottom: 3.7rem;
      }

      & > h2 + h2 {
        display: none;
      }
    }
  }

  div:last-child {
    display: flex;
    align-items: center;
    position: relative;

    width: 75%;
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
