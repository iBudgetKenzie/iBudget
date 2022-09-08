import styled from "styled-components";

export const DeveloperStyled = styled.li`
  width: 100%;
  height: 90%;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(var(--color-white), 0.9);
  border-radius: 5px;
  text-align: center;

  & > figure {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 425px) {
    & {
      height: 100%;
    }

    & > figure {
      width: 100%;
      height: 100%;

      img {
        width: 80%;
        height: 100%;
      }
    }
  }

  @media (min-width: 650px) {
    & {
      flex-direction: column;
      padding: 10px;
      width: 30%;
      height: 50%;
      min-height: 150px;
    }

    & > figure {
      width: 90%;
      height: 100%;

      img {
        width: 50%;
        height: 100%;
        border-radius: 80%;
      }
    }

    & > div > p:nth-child(1) {
      font-size: 0.88rem;
      font-weight: 500;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100%;
    height: 100%;
    padding-top: 10px;

    .dev-name {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .dev-job {
      font-size: 0.8rem;
      font-weight: 300;
    }

    a {
      margin: 5px;
      font-size: 1.2rem;
    }

    @media (min-width: 768px) {
      & {
        gap: 7px;
      }
    }

    @media (min-width: 1024px) {
      .dev-name {
        font-size: 0.88rem;
        font-weight: 600;
      }

      .dev-job {
        font-size: 0.7rem;
        font-weight: 300;
      }

      a {
        margin: 3px;
      }
    }
  }
`;
