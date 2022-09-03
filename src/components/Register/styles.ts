import styled from "styled-components";

export const StyledRegister = styled.div`
  background-color: rgba(255, 255, 255, 1);
  color: black;

  height: 450px;
  width: 300px;
  left: -796px;
  top: -267px;
  border-radius: 7px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 6px;

  margin-top: 10px;

  /* position: relative; */

  @media screen and (min-width: 700px) {
    height: 500px;
    width: 350px;
    /* margin-bottom: -30px; */
    justify-content: space-evenly;
  };

  h4 {
    font-size: 20px;
  };

  form {
    max-height: 390px;
    padding: 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1px;

    @media screen and (min-width: 700px) {
      max-height: 490px;
      gap: 5px;
    };

    .div--label {
      display: flex;
      flex-direction: column;
      /* gap: 1px; */
    };

    label {
      font-size: 14px;
    };

    span {
      color: rgba(var(--color-negative-pink), 1);
    };

    .span--error {
      font-size: 13px;
    };

    input {
      height: 27px;
      padding: 7px;
      border-radius: 5px;
      border: 1px solid rgb(var(--color-purple-light), 2);

      ::placeholder {
        font-size: 14px;
      };

      @media screen and (min-width: 700px) {
        height: 30px;
      };
    };

    .div--senhas {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      input {
        width: 120px;
      };
    };

    .div--images {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      label {
        font-size: 13px;
      };

      .div--avatars {
        display: flex;
        justify-content: space-around;
        gap: 9px;

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;

          & :active {
            border: solid 2px rgb(var(--color-negative-pink), 2); 
            border-radius: 50%;
          }

          & :hover {
            box-shadow: 1px 1px 5px 0px;
            border-radius: 50%;
          }

          margin-top: 2px;

          img {
            width: 28px;
            height: 30px;
          };
        };
        .avatar:

      };

      input {
        width: 120px;
      };

      margin-bottom: 1px;
    };

    .register {
      height: 32px;
      width: 250px;
      left: 41px;
      top: 520px;
      border-radius: 8px;

      background-color: rgba(var(--color-purple), 1);
      color: rgba(var(--color-white), 1);

      font-size: 14px;

      margin-top: 10px;
    };
  };
`;
