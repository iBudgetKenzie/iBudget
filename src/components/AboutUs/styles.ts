import styled from "styled-components";

export const AboutUsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 40px;

  & > p {
    max-width: 680px;
    font-size: 1.2rem;
    color: rgba(var(--color-white), 0.9);
  }
`;

export const EquipList = styled.ul`
  width: 100%;
  max-width: 700px;
  min-height: 120px;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(var(--color-grey-2), 1);
    border-radius: 10px;
  }

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Dev = styled.li`
  width: 30%;
  height: 180px;
  background-color: rgba(var(--color-white), 0.9);
  border-radius: 5px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > figure {
    width: 100%;
    height: 60%;
    overflow: hidden;

    img {
      width: 50%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;

    width: 100%;
    height: 40%;
    padding-top: 10px;

    .dev-name {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .dev-job {
      font-size: 0.8rem;
      font-weight: 300;
    }
  }
`;
