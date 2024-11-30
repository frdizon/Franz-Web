import { FC, ReactNode } from 'react';
import { BranchHeader, Container, StyledTopmostLine } from './styles';
import briefCaseLogo from '../../assets/fluent_briefcase_48.svg';

interface IBranchPanelComponent {
    children: ReactNode;
}

const BranchPanelComponent: FC<IBranchPanelComponent> = ({ children }) => {
    return (
        <Container>
            <BranchHeader>
                <img src={briefCaseLogo} className="logo" alt="Vite logo" />
                <h1>Professional Experience</h1>
            </BranchHeader>
            <StyledTopmostLine branchColorTheme='skyblue' />
            {children}
        </Container>
    );
}

export default BranchPanelComponent;