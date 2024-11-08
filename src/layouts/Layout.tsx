import { FC } from 'react';
import { Container } from './styles';
import HelloWorld from '../components/HelloWorld/HelloWorld';
import Experience from './Experience/Experience';

const Layout: FC = () => {
    return (
        <Container>
            <HelloWorld />
            <Experience />
        </Container>
    );
}

export default Layout;