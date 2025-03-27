import { FC, ReactNode } from "react";
import { BranchHeader, Container, StyledTopmostLine } from "./styles";
import briefCaseLogo from "../../assets/fluent_briefcase_48.svg";
import { ContentContainer } from "./subcomponents/SubBranchPanel/styles";
import Line from "./subcomponents/BranchLines/Line";
import Knot from "./subcomponents/BranchLines/Knot";

interface IBranchPanelComponent {
  headerTitle: string;
  branchColorTheme: string;
  endingBranchColor?: string;
  isLastPanel?: boolean;
  children: ReactNode;
}

const BranchPanelComponent: FC<IBranchPanelComponent> = ({
  headerTitle,
  branchColorTheme,
  endingBranchColor = branchColorTheme,
  isLastPanel = false,
  children,
}) => {
  return (
    <Container>
      <BranchHeader branchColorTheme={branchColorTheme}>
        <img src={briefCaseLogo} alt="Vite logo" />
        <h1>{headerTitle}</h1>
      </BranchHeader>
      <StyledTopmostLine branchColorTheme={branchColorTheme} />
      {children}
      {!isLastPanel ? (
        <ContentContainer>
          <Line branchColorTheme={branchColorTheme} />
          <div style={{ height: "28px" }} />
        </ContentContainer>
      ) : (
        <Knot branchColorTheme={endingBranchColor} />
      )}
    </Container>
  );
};

export default BranchPanelComponent;
