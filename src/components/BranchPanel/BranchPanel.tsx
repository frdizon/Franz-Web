import { FC } from 'react';
import { BranchHeader, Container, SubBranchContainer, SubBranchHeaderDetails } from './styles';
import briefCaseLogo from '../../assets/fluent_briefcase_48.svg';
import Fork from './subcomponents/BranchLines/Fork';

const BranchPanelComponent: FC = () => {
    return (
        <Container>
            <BranchHeader>
                <img src={briefCaseLogo} className="logo" alt="Vite logo" />
                <h1>Professional Experience</h1>
            </BranchHeader>
            <SubBranchContainer>
                <Fork stroke='skyblue' />
                <SubBranchHeaderDetails branchColorTheme='skyblue'>
                    <div>
                        <h3>Aug 2024 to Present</h3>
                    </div>
                    <div>
                        <h1>SM Supermalls</h1>
                    </div>
                    <div>
                        <h2>Software Engineer</h2>
                    </div>
                </SubBranchHeaderDetails>
            </SubBranchContainer>
        </Container>
    );
}

export default BranchPanelComponent;