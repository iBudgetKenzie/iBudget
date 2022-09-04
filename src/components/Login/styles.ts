import styled from "styled-components";

export const StyledLogin = styled.div`
  background-color: rgba(var(--color-white));
  color: rgba(var(--color-text-black));

  height: 60%;
  width: 70%;
  border-radius: 7px;
  padding: 20px 40px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
  gap: 20px;

  /* margin-top: 70px; */

  h4 {
    font-size: 20px;
    /* margin-bottom: 20px; */
  }

  @media screen and (min-width: 700px) {
    height: 50%;
    width: 50%;
    margin-top: 0px;

    h4 {
      font-size: 1.25rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 700px) {
      height: 100%;
      width: 100%;
      justify-content: center;
    }

    input {
      width: 100%;
      height: 15%;
      border-radius: 5px;
      padding: 10px;

      border: solid 1px rgba(var(--color-purple));

      /* @media screen and (min-width: 700px) {
        height: 30px;
      } */
    }

    span {
      font-size: 0.8rem;
      color: rgba(var(--color-negative-pink));
    }

    p {
      font-size: 0.88rem;
      align-self: center;
    }

    .cadastro {
      background-color: transparent;
      color: rgba(var(--color-purple));
    }

    .login {
      width: 100%;
      height: 18%;
      margin-top: 5px;

      border-radius: 8px;
      font-size: 1rem;

      color: rgba(var(--color-text-white));
      background-color: rgba(var(--color-purple));

      /* @media screen and (min-width: 700px) {
        min-height: 35px;
      } */
    }
  }
`;

// export const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
// `;
