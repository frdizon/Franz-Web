import { FC } from "react";
import { StyledImg } from "./styles";

export interface ILogoProps {
  src: string;
  alt: string;
  heightCss: string;
  topCss: string;
  leftCss: string;
}

const Logo: FC<ILogoProps> = ({ src, alt, heightCss, topCss, leftCss }) => (
  <StyledImg
    src={src}
    alt={alt}
    heightCss={heightCss}
    topCss={topCss}
    leftCss={leftCss}
  />
);

export default Logo;
