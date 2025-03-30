import { FC, ReactNode } from "react";
import {
  Container,
  ContentContainer,
  ImageContainer,
  ImagePlaceholder,
} from "./styles";

interface ICardProps {
  imageComponent?: ReactNode;
  children?: ReactNode;
}

const Card: FC<ICardProps> = ({ imageComponent, children, ...rest }) => {
  return (
    <Container {...rest}>
      <ImageContainer>
        {imageComponent !== undefined ? imageComponent : <ImagePlaceholder />}
      </ImageContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Card;
