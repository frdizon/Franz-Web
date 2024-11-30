import { FC, ReactNode } from 'react';
import { ContentContainer, HeaderContainer, HeaderDetailsContainer } from './styles';
import Fork from '../BranchLines/Fork';
import Line from '../BranchLines/Line';

interface ISubBranchPanelProps {
    timeFrame: string;
    title: string;
    subTitle: string;
    children: ReactNode;
}

const SubBranchPanel: FC<ISubBranchPanelProps> = ({timeFrame, title, subTitle, children}) => {
    return (
        <div>
            <HeaderContainer>
                <Fork stroke='skyblue' />
                <HeaderDetailsContainer branchColorTheme='skyblue'>
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
                <Line branchColorTheme='skyblue' />
                {children}
            </ContentContainer>
        </div>
    );
}

export default SubBranchPanel;