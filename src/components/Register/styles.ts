import styled from "styled-components";

export const StyledRegister = styled.div`
  background-color: rgba(var(--color-white), 1);
  color: rgba(var(--color-text-black), 1);

  height: 450px;
  width: 300px;
  left: -796px;
  top: -267px;
  border-radius: 7px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  gap: 10px;

  /* margin-top: 10px; */
  /* position: relative; */

  @media screen and (min-width: 700px) {
    height: 80%;
    width: 50%;
    /* margin-bottom: -30px; */
    justify-content: center;
  }

  h4 {
    font-size: 1.25rem;
  }

  form {
    /* max-height: 390px; */
    /* padding: 0px; */

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
    gap: 10px;

    @media screen and (min-width: 700px) {
      height: 90%;
      width: 100%;
    }

    .div--label {
      display: flex;
      flex-direction: column;
      /* gap: 1px; */
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
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      label {
        font-size: 0.81rem;
      }

      .div--avatars {
        display: flex;
        justify-content: space-between;
        gap: 10px;

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;

          & :active {
            border: solid 2px rgb(var(--color-negative-pink), 2);
            border-radius: 50%;
          }

          & :hover {
            box-shadow: 0px 0px 5px 0px;
            border-radius: 50%;
          }

          margin-top: 2px;

          img {
            width: 28px;
            height: 30px;
          }
        }
      }

      input {
        width: 100%;
      }
    }

    .register {
      margin-top: 20px;
      min-height: 12%;
      width: 100%;
      border-radius: 8px;

      background-color: rgba(var(--color-purple), 1);
      color: rgba(var(--color-white), 1);

      font-size: 1rem;
    }
  }
`;
