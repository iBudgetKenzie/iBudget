import styled from "styled-components";

export const ConteinerCreateMobile = styled.section`
  width: 60vw;
  padding-top: 21px;

  & > h2 {
    font-size: 0.88rem;
    padding-bottom: 5px;
    text-align: right;
    color: rgba(var(--color-text-white), 1);
    text-decoration: underline;
    cursor: pointer;
  }

  & > div {
    width: 100%;
  }

  @media (max-width: 610px) {
    width: 100%;
  }
`;
