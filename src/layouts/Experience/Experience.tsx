import { FC } from "react";
import BranchPanel from "../../components/BranchPanel/BranchPanel";
import SubBranchPanel from "../../components/BranchPanel/subcomponents/SubBranchPanel/SubBranchPanel";
import { SAMSUNG_LOGO_SPACING, SM_LOGO_DETAILS } from "./constants";
import ExperiencePane from "../../components/ExperiencePane/ExperiencePane";
import Card from "../../components/ExperiencePane/subcomponents/Card/Card";

const Experience: FC = () => {
  return (
    <BranchPanel>
      <SubBranchPanel
        timeFrame="August 2024 to Present"
        title="SM Supermalls"
        subTitle="Software Engineer"
        logoDetails={SM_LOGO_DETAILS}
      >
        <ExperiencePane>
          <Card>
            <h3>Frontend Developer (ReactJS)</h3>
            <ul>
              <li>
                Developed and maintained features for internal web tools
                supporting the SM Malls Online App.
              </li>
              <li>
                Addressed UI styling inconsistencies to improve user experience.
              </li>
              <li>Resolved Snyk-reported vulnerabilities issues.</li>
            </ul>
          </Card>
          <Card>
            <h3>Frontend Developer (NextJs)</h3>
            <ul>
              <li>
                Spearheaded the migration initiative from using the old ReactJs
                version to using NextJs for building the internal webtools.
              </li>
            </ul>
          </Card>
          <Card>
            <h3>Other role(s)</h3>
            <ul>
              <li>
                Investigate issues encountered in the production environment
                using Datadog.
              </li>
            </ul>
          </Card>
        </ExperiencePane>
      </SubBranchPanel>
      <SubBranchPanel
        timeFrame="July 2018 to July 2024"
        title="Samsung Research Philippines"
        subTitle="Software Engineer"
        logoDetails={SAMSUNG_LOGO_SPACING}
      >
        <ExperiencePane>
          <Card>
            <h3>Frontend Developer (ReactJS)</h3>
            <ul>
              <li>
                Developed web applications that will be a part of Samsung
                Network tools.
              </li>
              <li>
                Developed complex components that will be used to visualize
                complicated data.
              </li>
              <li>
                Developed common components that will be used across different
                web applications.
              </li>
              <li>
                Investigated web applications dealing with optimization
                problems.
              </li>
            </ul>
          </Card>
          <Card>
            <h3>Backend Developer (Java Spring)</h3>
            <ul>
              <li>
                Designed and implemented APIs using Java Spring for integration
                with Samsung Network Tools.
              </li>
            </ul>
          </Card>
          <Card>
            <h3>Other role(s)</h3>
            <ul>
              <li>
                Passed internal Certification for Algorithms (Professional
                level) and was able to mentor new members that will also take
                the said certification.
              </li>
            </ul>
          </Card>
        </ExperiencePane>
      </SubBranchPanel>
    </BranchPanel>
  );
};

export default Experience;
