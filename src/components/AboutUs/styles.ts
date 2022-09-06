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
