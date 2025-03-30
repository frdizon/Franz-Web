import { FC } from "react";
import { Container, ProfilePictureConainer, TextContainer } from "./styles";
import photoOfMeSrc from "../../assets/me.jpg";

const HelloWorld: FC = () => {
  return (
    <Container>
      <TextContainer>
        <p>
          <span>Hello World!</span>&nbsp;<span>I'm Franz Stewart Dizon</span>
        </p>
        <p>A software developer who specializes in React</p>
        <p>frdizon@live.com | +64 977 853 3503</p>
      </TextContainer>
      <ProfilePictureConainer>
        <img src={photoOfMeSrc} alt="A photo of me." />
      </ProfilePictureConainer>
    </Container>
  );
};

export default HelloWorld;
