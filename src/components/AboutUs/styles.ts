import styled from "styled-components";

export const AboutUsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 40px;

  .text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      font-size: 1rem;
      color: rgba(var(--color-white), 0.9);

      @media (min-width: 1024px) {
        & {
          font-size: 0.88rem;
        }
      }
    }
  }
`;

export const EquipList = styled.ul`
  width: 100%;
  height: 90%;
  min-height: 120px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;

  @media (min-width: 375px) {
    & {
      padding: 0 3%;
    }
  }

  @media (min-width: 768px) {
    & {
      padding: 5% 10% 0 0;
      max-width: 700px;
      max-height: 400px;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1024px) {
    & {
      padding: 0;
      gap: 10px;
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(var(--color-grey-2), 1);
    border-radius: 10px;
  }
`;

export const Dev = styled.li`
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
      border-radius: 100%;
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

  @media (min-width: 768px) {
    & {
      flex-direction: column;
      height: 100%;
    }

    & > figure {
      width: 100%;
      height: 100%;

      img {
        width: 50%;
        height: 100%;
      }
    }
  }

  @media (min-width: 1024px) {
    & {
      flex-direction: column;
      padding: 5px;
      width: 30%;
      min-height: 180px;
    }

    & > figure {
      width: 100%;
      height: 60%;

      img {
        width: 50%;
        height: 100%;
      }
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
