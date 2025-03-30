import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  max-height: 800px;
  min-height: 560px;
  width: 100%;
  background-color: #1a1f24;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
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

  @media (max-width: 900px) {
    > p,
    span {
      font-size: 24px;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    > p,
    span {
      font-size: 18px;
    }
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

  @media (max-width: 900px) {
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }
`;
