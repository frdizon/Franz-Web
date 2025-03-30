import styled from "styled-components";

const Line = styled.div<{
  branchColorTheme: string;
  branchTransitionToColor?: string;
}>`
  width: 1px;
  min-width: 1px;
  background-color: ${({ branchColorTheme }) => branchColorTheme};
  background: linear-gradient(
    180deg,
    ${({ branchColorTheme }) => branchColorTheme} 95%,
    ${({ branchTransitionToColor, branchColorTheme }) =>
        branchTransitionToColor ? branchTransitionToColor : branchColorTheme}
      100%
  );

  @media (max-width: 600px) {
    position: relative;
    left: 24px;
  }
`;

export default Line;
