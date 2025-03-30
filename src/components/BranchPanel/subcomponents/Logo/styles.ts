import styled from "styled-components";

export const StyledImg = styled.img<{
  heightCss: string;
  topCss: string;
  leftCss: string;
}>`
  position: absolute;
  height: ${({ heightCss }) => heightCss};
  top: ${({ topCss }) => topCss};
  left: ${({ leftCss }) => leftCss};
`;
