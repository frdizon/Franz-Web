import styled from "styled-components";
import Line from "./subcomponents/BranchLines/Line";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  border-left: 1px solid blue;
  border-right: 1px solid blue;
`;

export const BranchHeader = styled.div<{ branchColorTheme: string }>`
  display: flex;

  align-items: center;
  h1 {
    color: #f8e5d7;
    margin-left: 28px;
  }
`;

export const StyledTopmostLine = styled(Line)`
  height: 50px;
  margin-left: 24px;
`;
