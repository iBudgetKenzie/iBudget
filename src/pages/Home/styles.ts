import styled from "styled-components";

export const StyledBody = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }

  .logo-div {
    width: 100%;
    height: 15%;
    padding: 50px;

    background-color: rgb(30, 30, 30);
    color: white;

    img {
      width: 100px;
      height: 100px;
      @media screen and (min-width: 700px) {
        width: 280px;
      }
    }

    display: flex;
    align-items: center;

    .logo-paragraph {
      color: white;
      font-size: 14px;
      font-weight: bold;
      @media screen and (min-width: 700px) {
        font-size: 20px;
      }
    }

    @media screen and (min-width: 700px) {
      width: 50%;
      height: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }

  .header {
    width: 100%;
    height: 85%;
    background-color: rgb(122, 99, 255);

    display: flex;
    flex-direction: column;
    gap: 0px;

    header {
      display: flex;
      justify-content: space-around;
      align-items: center;

      height: 40px;
      padding: 20px;
    }

    .header-menu {
      background-color: rgb(122, 99, 255);
      color: white;
    }

    @media screen and (min-width: 700px) {
      width: 50%;
      height: 100%;

      header {
        justify-content: space-evenly;
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;

    @media screen and (min-width: 700px) {
      align-items: center;
    }
  }
`;
