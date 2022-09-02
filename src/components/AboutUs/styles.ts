import styled from "styled-components";

export const AboutUsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 40px;

  & > p {
    font-size: 1.2rem;
    color: rgba(var(--color-white), 0.9);
  }
`;

export const EquipList = styled.ul`
  width: 100%;
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
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Dev = styled.li`
  width: 180px;
  height: 180px;
  background-color: rgba(var(--color-white), 0.9);
  border-radius: 5px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  & > figure {
    width: 100%;
    overflow: hidden;

    img {
      width: 50%;
      border-radius: 100%;
    }
  }
`;
