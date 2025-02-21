import { FC, ReactNode } from "react";
import {
  Container,
  ContentContainer,
  ImageContainer,
  ImagePlaceholder,
} from "./styles";

interface ICardProps {
  children?: ReactNode;
}

const Card: FC<ICardProps> = ({ children }) => {
  return (
    <Container>
      <ImageContainer>
        <ImagePlaceholder />
      </ImageContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Card;
