import styled from "styled-components";

export const StyledLogin = styled.div`
  position: absolute;
  height: 80%;
  max-height: 450px;
  width: 100%;
  max-width: 350px;
  border-radius: 7px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  background-color: rgba(var(--color-white));
  color: rgba(var(--color-text-black));
  overflow-y: auto;

  @media (min-width: 1700px) {
    & {
      max-height: 550px;
      max-width: 450px;
    }
  }

  h4 {
    font-size: 1.25rem;
    align-self: center;
  }

  @media (min-width: 1700px) {
    h4 {
      font-size: 1.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      width: 100%;
      height: 12%;
      border-radius: 5px;
      padding: 10px;
      border: solid 1px rgba(var(--color-purple));
    }

    @media (min-width: 1700px) {
      & > input {
        height: 25%;
      }
    }

    span {
      font-size: 0.7rem;
      color: rgba(var(--color-negative-pink));
    }

    .cadastro {
      background-color: transparent;
      color: rgba(var(--color-grey-1));
      font-weight: 400;
      align-self: center;
      font-family: var(--font-menu-base);
      font-size: 0.88rem;
      cursor: pointer;
      :hover {
        text-decoration: 2px underline;
      }
    }

    .login {
      width: 100%;
      height: 8vh;
      margin-top: 10px;
      border-radius: 8px;
      font-size: 1rem;
      font-family: var(--font-forms-base);
      color: rgba(var(--color-text-white));
      background-color: rgba(var(--color-purple));
    }

    @media (min-width: 1700px) {
      & > .login {
        height: 10vh;
      }
    }
  }
`;
