import { FC } from 'react';
import BranchPanel from '../../components/BranchPanel/BranchPanel';
import SubBranchPanel from '../../components/BranchPanel/subcomponents/SubBranchPanel/SubBranchPanel';
import { TempContent } from '../../components/BranchPanel/subcomponents/SubBranchPanel/styles';

const Experience: FC = () => {
    return (
        <BranchPanel>
            <SubBranchPanel timeFrame="August 2024 to Present" title="SM Supermalls" subTitle="Software Engineer">
                <TempContent />
            </SubBranchPanel>
            <SubBranchPanel timeFrame="July 2018 to July 2024" title="Samsung Research Philippines" subTitle="Software Engineer">
                <TempContent />
            </SubBranchPanel>
        </BranchPanel>
    );
}

export default Experience;