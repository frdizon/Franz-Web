import { FC } from "react";
import styled from "styled-components";

const CircleContainer = styled.div<{ branchColor: string }>`
  height: 12px;
  width: 12px;
  border-radius: 12px;
  border: 1px solid ${({ branchColor }) => branchColor};

  position: relative;
  left: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StrikeThroughLine = styled.div<{ branchColor: string }>`
  height: 1px;
  width: 24px;
  background-color: ${({ branchColor }) => branchColor};
  flex-shrink: 0;
`;

interface IKnotProps {
  branchColorTheme: string;
}

const Knot: FC<IKnotProps> = ({ branchColorTheme }) => {
  return (
    <CircleContainer branchColor={branchColorTheme}>
      <StrikeThroughLine branchColor={branchColorTheme} />
    </CircleContainer>
  );
};

export default Knot;
