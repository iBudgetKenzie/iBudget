import styled from "styled-components";

export const StyledRegister = styled.div`
  background-color: rgba(var(--color-white), 1);
  color: rgba(var(--color-text-black), 1);

  height: 450px;
  width: 300px;
  left: -796px;
  top: -267px;
  border-radius: 7px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5px;

  @media screen and (min-width: 700px) {
    height: 90%;
    width: 58%;
    /* margin-bottom: -30px; */
    justify-content: center;
  }

  h4 {
    font-size: 1.25rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    @media screen and (min-width: 700px) {
      height: 100%;
      width: 100%;
    }

    .div--label {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    label {
      font-size: 0.88rem;
    }

    span {
      color: rgba(var(--color-negative-pink), 1);
    }

    .span--error {
      font-size: 0.81rem;
      margin: 0;
      padding: 0;
    }

    input {
      width: 100%;
      height: 80%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid rgb(var(--color-purple), 2);

      ::placeholder {
        font-size: 0.88rem;
      }

      /* @media screen and (min-width: 700px) {
        height: 15%;
      } */
    }

    .div--senhas {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      input {
        width: 100%;
      }
    }

    .div--cargo {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;

      input {
        width: 100%;
        height: 80%;
      }
    }

    .div--images {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px;

      label {
        font-size: 0.88rem;
        padding: 5px;
      }

      input {
        width: 100%;
      }

      .div--avatars {
        margin-top: 5px;
        display: flex;
        justify-content: space-around;
        gap: 5px;

        .avatar {
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
      margin-top: 15px;
      height: 10%;
      width: 100%;
      border-radius: 8px;

      background-color: rgba(var(--color-purple), 1);
      color: rgba(var(--color-white), 1);

      font-size: 1rem;
    }
  }
`;
