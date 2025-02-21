import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  flex: 1;
  background-color: #f8e5d7;
  border-radius: 4px;
  opacity: 80%;

  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  flex: 3;
  height: 100%;
  overflow: clip;
  border-radius: 4px 4px 0 0;
`;

export const ContentContainer = styled.div`
  flex: 4;
  padding: 0 16px;
`;

export const ImagePlaceholder = styled.div`
  background-color: aqua;
  height: 100%;
  width: 100%;
`;
