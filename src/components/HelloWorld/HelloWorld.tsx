import { FC } from 'react';
import { Container, ProfilePictureConainer, TextContainer } from './styles';

const HelloWorld: FC = () => {
    return (
        <Container>
            <TextContainer>
                <p><span>Hello World!</span>&nbsp;<span>I'm Franz Stewart Dizon</span></p>
                <p>A front end developer who specializes in React</p>
            </TextContainer>
            <ProfilePictureConainer />
        </Container>
    );
}

export default HelloWorld;