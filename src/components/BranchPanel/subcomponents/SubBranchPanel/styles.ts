import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  padding: 0 24px;
  position: relative;
`;

export const HeaderDetailsContainer = styled.div<{ branchColorTheme: string }>`
  height: fit-content;
  position: relative;
  top: 97px;
  left: 75px;

  h1,
  h2 {
    color: ${({ branchColorTheme }) => branchColorTheme};
  }
  h3 {
    color: #d5c1b6;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  padding: 0 24px;
  height: fit-content;
  width: 100%;
`;
