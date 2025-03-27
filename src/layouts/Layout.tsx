import { FC } from "react";
import { Container } from "./styles";
import HelloWorld from "./HelloWorld/HelloWorld";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

const Layout: FC = () => {
  return (
    <Container>
      <HelloWorld />
      <Experience />
      <Education />
    </Container>
  );
};

export default Layout;
