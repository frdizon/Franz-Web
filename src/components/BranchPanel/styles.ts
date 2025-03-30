import styled from "styled-components";
import Line from "./subcomponents/BranchLines/Line";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const BranchHeader = styled.div<{ branchColorTheme: string }>`
  display: flex;

  align-items: center;
  h1 {
    color: #f8e5d7;
    margin-left: 28px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const StyledTopmostLine = styled(Line)`
  height: 50px;
  margin-left: 24px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
