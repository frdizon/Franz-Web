import { FC, ReactNode } from "react";
import {
  ContentContainer,
  HeaderContainer,
  HeaderDetailsContainer,
} from "./styles";
import Fork from "../BranchLines/Fork";
import Line from "../BranchLines/Line";
import Logo, { ILogoProps } from "../Logo/Logo";

interface ISubBranchPanelProps {
  timeFrame: string;
  title: string;
  subTitle: string;
  logoDetails: ILogoProps;
  branchColorTheme: string;
  nextBranchColor?: string;
  children: ReactNode;
}

const SubBranchPanel: FC<ISubBranchPanelProps> = ({
  timeFrame,
  title,
  subTitle,
  logoDetails,
  branchColorTheme,
  nextBranchColor = branchColorTheme,
  children,
}) => {
  return (
    <div>
      <HeaderContainer branchColorTheme={branchColorTheme}>
        <Fork id={title} stroke={branchColorTheme} />
        <Logo
          src={logoDetails.src}
          alt={logoDetails.alt}
          heightCss={logoDetails.heightCss}
          topCss={logoDetails.topCss}
          leftCss={logoDetails.leftCss}
        />
        <HeaderDetailsContainer branchColorTheme={branchColorTheme}>
          <div>
            <h3>{timeFrame}</h3>
          </div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <h2>{subTitle}</h2>
          </div>
        </HeaderDetailsContainer>
      </HeaderContainer>
      <ContentContainer>
        <Line
          branchColorTheme={branchColorTheme}
          branchTransitionToColor={nextBranchColor}
        />
        {children}
      </ContentContainer>
    </div>
  );
};

export default SubBranchPanel;
