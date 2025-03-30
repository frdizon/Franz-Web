import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  max-height: 800px;
  min-height: 560px;
  width: 100%;
  border-bottom: 1px solid orange;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const TextContainer = styled.div`
  p,
  span {
    color: #f8e5d7;
    font-size: 28px;
    text-align: right;
    margin: 12px 0;
  }
  p > span:first-child {
    color: #f8bd97;
    font-weight: 700;
  }
  > p:last-child {
    margin-top: 28px;
    font-size: 18px;
    color: #d5c1b6;
  }
`;

export const ProfilePictureConainer = styled.div`
  height: 400px;
  width: auto;
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.14);

  > img {
    height: 100%;
    width: auto;
    border-radius: 4px;
  }
`;
