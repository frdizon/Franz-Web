import { FC, ReactNode } from "react";
import { BranchHeader, Container, StyledTopmostLine } from "./styles";
import { ContentContainer } from "./subcomponents/SubBranchPanel/styles";
import Line from "./subcomponents/BranchLines/Line";
import Knot from "./subcomponents/BranchLines/Knot";

interface IBranchPanelComponent {
  headerTitle: string;
  branchColorTheme: string;
  endingBranchColor?: string;
  isLastPanel?: boolean;
  iconLogo: ReactNode;
  children: ReactNode;
}

const BranchPanelComponent: FC<IBranchPanelComponent> = ({
  headerTitle,
  branchColorTheme,
  endingBranchColor = branchColorTheme,
  isLastPanel = false,
  iconLogo,
  children,
}) => {
  return (
    <Container>
      <BranchHeader branchColorTheme={branchColorTheme}>
        {iconLogo}
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
