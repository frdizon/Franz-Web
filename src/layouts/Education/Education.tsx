import { FC } from "react";
import BranchPanel from "../../components/BranchPanel/BranchPanel";
import SubBranchPanel from "../../components/BranchPanel/subcomponents/SubBranchPanel/SubBranchPanel";
import ExperiencePane from "../../components/ExperiencePane/ExperiencePane";
import Card from "../../components/ExperiencePane/subcomponents/Card/Card";
import { DLSU_LOGO_DETAILS, UST_LOGO_DETAILS } from "./constants";
import ustEvosys from "../../assets/ust_evosys2-1.jpg";
import bookLogo from "../../assets/fluent_book_48.svg";
import gradImageSrc from "../../assets/me_grad2-1.jpg";
import presentinImageSrc from "../../assets/Presenting2-1.jpg";
import analyticsImageSrc from "../../assets/dengue_analytics.jpg";

const Education: FC = () => {
  return (
    <BranchPanel
      headerTitle="Educational Background"
      branchColorTheme="lightgreen"
      endingBranchColor="yellow"
      iconLogo={<img src={bookLogo} alt="Book logo" />}
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
          <Card
            imageComponent={
              <img src={presentinImageSrc} alt="Me presenting at PCSC 2024" />
            }
          >
            <h3>Presented a paper on a local conference.</h3>
            <ul>
              <li>
                A short paper containing the results of my master's thesis
                titled{" "}
                <i>
                  Performance of various protein representations for predicting
                  phage-host interaction
                </i>
                , was presented during the{" "}
                <i>24th Philippine Computing Science Congress</i>.
              </li>
              <li>
                The paper can be accessed on the{" "}
                <a
                  href="https://pcsc.dlsu.edu.ph/proceedings/main-conference/21.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PCSC website
                </a>
                .
              </li>
            </ul>
          </Card>
          <Card
            imageComponent={
              <img src={gradImageSrc} alt="Me during graduation." />
            }
          >
            <h3>Graduated with high grades</h3>
            <ul>
              <li>Achieved a cumulative GPA of 3.750 out of 4.000.</li>
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
          <Card
            imageComponent={
              <img src={analyticsImageSrc} alt="Visualizing analytics." />
            }
          >
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
