import styled from "styled-components";
import Line from "./subcomponents/BranchLines/Line";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  border: 1px solid blue;
`;

export const BranchHeader = styled.div`
  display: flex;

  align-items: center;
  h1 {
    color: skyblue;
    margin-left: 28px;
  }
`;

export const StyledTopmostLine = styled(Line)`
  height: 50px;
  margin-left: 24px;
`;
