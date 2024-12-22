import { FC } from "react";
import BranchPanel from "../../components/BranchPanel/BranchPanel";
import SubBranchPanel from "../../components/BranchPanel/subcomponents/SubBranchPanel/SubBranchPanel";
import { TempContent } from "../../components/BranchPanel/subcomponents/SubBranchPanel/styles";
import { SAMSUNG_LOGO_SPACING, SM_LOGO_DETAILS } from "./constants";

const Experience: FC = () => {
  return (
    <BranchPanel>
      <SubBranchPanel
        timeFrame="August 2024 to Present"
        title="SM Supermalls"
        subTitle="Software Engineer"
        logoDetails={SM_LOGO_DETAILS}
      >
        <TempContent />
      </SubBranchPanel>
      <SubBranchPanel
        timeFrame="July 2018 to July 2024"
        title="Samsung Research Philippines"
        subTitle="Software Engineer"
        logoDetails={SAMSUNG_LOGO_SPACING}
      >
        <TempContent />
      </SubBranchPanel>
    </BranchPanel>
  );
};

export default Experience;
