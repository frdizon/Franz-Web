import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  margin: 12px;
  padding: 18px 12px;
  background-color: #988f88;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 0px 32px #30393e;

  display: flex;
  gap: 16px;

  ul {
    padding: 0 24px;
  }

  @media (max-width: 600px) {
    flex-flow: column;
    margin: 12px 0;
    border-radius: 0;
  }
`;
