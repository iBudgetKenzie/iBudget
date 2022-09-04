import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 40px;

  padding: 40px;

  color: rgb(255, 255, 255);

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .main-text {
    max-width: 650px;
  }

  .main-contact {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .contacts {
      display: flex;
      flex-direction: column;
      gap: 3px;

      & > p:nth-child(1) {
        font-weight: 800;
      }
      & > p:nth-child(2) {
        font-weight: 300;
      }
    }

    .redes {
      display: flex;
      gap: 20px;

      a {
        color: rgb(255, 255, 255);
      }
    }
  }
`;
