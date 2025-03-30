import styled from "styled-components";

export const HeaderContainer = styled.div<{ branchColorTheme: string }>`
  height: fit-content;
  width: 100%;
  display: flex;
  padding: 0 24px;
  position: relative;
  align-items: center;
  svg {
    path {
      stroke: ${({ branchColorTheme }) => branchColorTheme};
    }
  }
`;

export const HeaderDetailsContainer = styled.div<{ branchColorTheme: string }>`
  height: fit-content;
  width: calc(100% - 175px);
  position: relative;
  left: 75px;

  h1,
  h2 {
    color: ${({ branchColorTheme }) => branchColorTheme};
  }
  h3 {
    color: #d5c1b6;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  padding: 0 24px;
  height: fit-content;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0;
  }
`;
