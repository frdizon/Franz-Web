import { FC } from "react";
import BranchPanel from "../../components/BranchPanel/BranchPanel";
import SubBranchPanel from "../../components/BranchPanel/subcomponents/SubBranchPanel/SubBranchPanel";
import ExperiencePane from "../../components/ExperiencePane/ExperiencePane";
import Card from "../../components/ExperiencePane/subcomponents/Card/Card";
import { DLSU_LOGO_DETAILS, UST_LOGO_DETAILS } from "./constants";
import ustEvosys from "../../assets/ust_evosys.jpg";

const Education: FC = () => {
  return (
    <BranchPanel
      headerTitle="Educational Background"
      branchColorTheme="lightgreen"
      endingBranchColor="yellow"
      isLastPanel
    >
      <SubBranchPanel
        timeFrame="2019 to 2024"
        title="Master of Science in Computer Science"
        subTitle="De La Salle University"
        logoDetails={DLSU_LOGO_DETAILS}
        branchColorTheme="lightgreen"
        nextBranchColor="yellow"
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
        </ExperiencePane>
      </SubBranchPanel>
      <SubBranchPanel
        timeFrame="2019 to 2024"
        title="Bachelor of Science in Computer Science"
        subTitle="University of Santo Tomas"
        logoDetails={UST_LOGO_DETAILS}
        branchColorTheme="yellow"
      >
        <ExperiencePane>
          <Card
            imageComponent={
              <img
                src={ustEvosys}
                alt="UST Students using the voting web application during the student government election."
              />
            }
          >
            <h3>Developed a voting web appplication</h3>
            <ul>
              <li>
                Part of a team composed of senior students, who developed a
                voting web application used for Student government elections,
                which was used by tens of thousands of students.
              </li>
              <li>
                Used C#, Asp.Net Core, Entity Framework, and Razor pages for the
                development.
              </li>
              <li>
                Spearheaded the formulation of the Entity Relationship Diagram
                to be used by system.
              </li>
            </ul>
          </Card>
          <Card>
            <h3>Thesis writing</h3>
            <ul>
              <li>
                Wrote a thesis titled{" "}
                <i>
                  Learning of High Dengue Incidence with Clustering and
                  FP-Growth Algorithm using WHO Historical Data
                </i>
                .
              </li>
              <li>
                The paper can be accessed on{" "}
                <a
                  href="https://arxiv.org/abs/1901.11376"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arxiv
                </a>
                .
              </li>
            </ul>
          </Card>
        </ExperiencePane>
      </SubBranchPanel>
    </BranchPanel>
  );
};

export default Education;
