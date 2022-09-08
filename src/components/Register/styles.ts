import styled from "styled-components";

export const StyledRegister = styled.div`
  position: absolute;
  overflow-y: auto;

  height: 100%;
  max-height: 550px;
  width: 100%;
  max-width: 350px;
  border-radius: 7px;
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

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

  background-color: rgba(var(--color-white), 1);
  color: rgba(var(--color-black), 1);

  @media (min-width: 768px) {
    & {
      height: 80vh;
    }
  }

  @media (min-width: 1700px) {
    & {
      max-height: 650px;
      max-width: 450px;
    }
  }

  h4 {
    font-size: 1.25rem;
  }

  @media (min-width: 1700px) {
    h4 {
      font-size: 1.5rem;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;

    .div--label {
      display: flex;
      flex-direction: column;
      gap: 2px;

      input {
        height: 100%;
        height: 100%;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgb(var(--color-purple), 1);

        ::placeholder {
          font-size: 0.81rem;
        }

        @media screen and (min-width: 700px) {
          height: 30px;
        }

        @media screen and (min-width: 1700px) {
          height: 5vh;
        }
      }

      span {
        font-size: 12px;
      }
    }

    label {
      font-size: 0.81rem;
    }

    span {
      color: rgba(var(--color-negative-pink), 1);
    }

    .span--error {
      font-size: 0.8rem;
    }

    .div--senhas {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      input {
        width: 100%;
      }
    }

    .div--cargo {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      font-size: 0.81rem;
      gap: 2px;

      &::placeholder {
          font-size: 0.81rem;
        }

      & > label {
        width: 100%;
        text-align: flex-start;
      }

      input {
        width: 100%;
        height: 30px;
        padding: 5px;

        border-radius: 5px;
        border: 1px solid rgb(var(--color-purple), 1);

        @media screen and (min-width: 1700px) {
          height: 5vh;
        }
      }
    }

    .div--images {
      display: flex;
      justify-content: space-between;

      label {
        font-size: 0.8rem;
      }

      .div--label {
        gap: 10px;
        width: 130px;

        label {
          font-size: 0.77rem;
        }
      }

      p {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .div--avatars {
        display: flex;
        justify-content: flex-start;
        gap: 12px;

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;

          img {
            width: 28px;
            height: 30px;
          }

          & :active {
            border: solid 2px rgb(var(--color-negative-pink), 2);
            border-radius: 50%;
          }

          & :hover {
            box-shadow: 0px 0px 5px 0px;
            border-radius: 50%;
          }
        }
      }
    }

    .register {
      width: 100%;
      height: 8vh;
      margin-top: 10px;
      border-radius: 8px;
      font-size: 1rem;
      font-family: var(--font-forms-base);
      color: rgba(var(--color-text-white));
      background-color: rgba(var(--color-purple));
    }
  }

  .div--button {
    button {
      max-height: 50px;
    }
  }
`;
