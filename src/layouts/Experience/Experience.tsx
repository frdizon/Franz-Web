import { FC } from "react";
import BranchPanel from "../../components/BranchPanel/BranchPanel";
import SubBranchPanel from "../../components/BranchPanel/subcomponents/SubBranchPanel/SubBranchPanel";
import {
  SAMSUNG_LOGO_SPACING,
  SM_LOGO_DETAILS,
  SMSNG_CARDS_MEDIAQUERY_VALUES,
} from "./constants";
import ExperiencePane from "../../components/ExperiencePane/ExperiencePane";
import Card from "../../components/ExperiencePane/subcomponents/Card/Card";
import {
  GridExperiencePane,
  BigCard,
  StyledCard,
  BigCardInfo,
  InfoCard,
  CenteredTextContainer,
} from "./styles";
import briefCaseLogo from "../../assets/fluent_briefcase_48.svg";
import samsungHqSrc from "../../assets/samsungHq4-3.jpg";
import algoSrc from "../../assets/algo4-3.jpg";
import smCmsSrc from "../../assets/sm-login-extended.jpg";
import reactToNextSrc from "../../assets/reactToNext2-1.jpg";

const Experience: FC = () => {
  return (
    <BranchPanel
      headerTitle="Professional Experience"
      branchColorTheme="skyblue"
      iconLogo={<img src={briefCaseLogo} alt="Briefcase logo" />}
    >
      <SubBranchPanel
        timeFrame="August 2024 to Present"
        title="SM Supermalls"
        subTitle="Software Engineer"
        logoDetails={SM_LOGO_DETAILS}
        branchColorTheme="skyblue"
      >
        <ExperiencePane>
          <Card
            imageComponent={
              <img src={smCmsSrc} alt="SM CMS Login visualization" />
            }
          >
            <h3>Frontend Development (ReactJS)</h3>
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
          <Card
            imageComponent={
              <img
                src={reactToNextSrc}
                alt="Visualization of migration from ReactJs to NextJs"
              />
            }
          >
            <h3>Frontend Development (NextJs)</h3>
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
        timeFrame="July 2018 to July 2024"
        title="Samsung Research Philippines"
        subTitle="Software Engineer"
        logoDetails={SAMSUNG_LOGO_SPACING}
        branchColorTheme="skyblue"
      >
        <GridExperiencePane>
          <BigCard>
            <BigCardInfo>
              <InfoCard gridCol={1} gridRow="1">
                <CenteredTextContainer>
                  Contributed mainly on Samsung's networking web applications
                  used for analytics, orchestration, and management of network
                  elements.
                </CenteredTextContainer>
              </InfoCard>
              <InfoCard gridCol={1} gridRow="2">
                <h3>Backend Development (Java Spring)</h3>
                <ul>
                  <li>
                    Designed and implemented Rest APIs using Java Spring boot
                    for integration with Samsung Network Tools.
                  </li>
                </ul>
              </InfoCard>
              <InfoCard gridCol={2} gridRow="1/3">
                <h3>Frontend Development (ReactJS)</h3>
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
                    Developed common components that will be used across
                    different web applications.
                  </li>
                  <li>
                    Investigated web applications dealing with optimization
                    problems.
                  </li>
                </ul>
              </InfoCard>
            </BigCardInfo>
          </BigCard>
          <StyledCard
            cardMediaQueryValues={SMSNG_CARDS_MEDIAQUERY_VALUES.CARD1}
            imageComponent={
              <img src={samsungHqSrc} alt="An image of me at Samsung HQ." />
            }
          >
            <div>
              Was sent to Samsung Headquarters at South Korea for close
              collaboration and in-depth planning of our projects.
            </div>
          </StyledCard>
          <StyledCard
            cardMediaQueryValues={SMSNG_CARDS_MEDIAQUERY_VALUES.CARD2}
            imageComponent={<img src={algoSrc} alt="Algorithm visualization" />}
          >
            <div>
              Passed internal Certification for Algorithms (Professional level)
              and was able to mentor new members that will also take the said
              certification.
            </div>
          </StyledCard>
        </GridExperiencePane>
      </SubBranchPanel>
    </BranchPanel>
  );
};

export default Experience;
