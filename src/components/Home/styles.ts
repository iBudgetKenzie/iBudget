import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding: 30px;

  color: rgb(255, 255, 255);

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 1.7rem;
    }
  }

  @media (min-width: 1700px) {
    h1 {
      font-size: 2rem;
    }
  }

  .main-text {
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 7px;

    font-size: 0.95rem;
  }

  @media (min-width: 800px) {
    .main-text {
      font-size: 1rem;
    }
  }

  @media (min-width: 1700px) {
    .main-text {
      font-size: 1.3rem;
    }
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
      gap: 30px;

      a {
        color: rgb(255, 255, 255);
      }
    }
  }
`;
