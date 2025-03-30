import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  flex: 1;
  background-color: #f8e5d7;
  border-radius: 4px;
  opacity: 80%;

  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  height: fit-content;
  overflow: clip;
  border-radius: 4px 4px 0 0;
  > img {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  height: fit-content;
  padding: 0 8px 0 16px;
`;

export const ImagePlaceholder = styled.div`
  background-color: aqua;
  height: 100%;
  width: 100%;
`;
