import { FC, ReactNode } from "react";
import { Container } from "./styles";

interface IExperiencePaneProps {
  children?: ReactNode;
}

const ExperiencePane: FC<IExperiencePaneProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ExperiencePane;
