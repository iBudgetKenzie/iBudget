import styled from "styled-components";

export const StyledBodyMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;

  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    rgba(var(--color-purple), 1) 50%,
    rgba(var(--color-black), 1) 50%
  );

  footer {
    width: 100%;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30%;
      height: 50%;
    }
  }

  .header-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 440px;
      height: 10vh;

      .header-menu {
        background-color: transparent;
        color: rgba(var(--color-white));
      }
    }
  }

  .content {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;

    position: relative;
  }
`;
