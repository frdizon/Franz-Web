import styled from "styled-components";
import ExperiencePane from "../../components/ExperiencePane/ExperiencePane";
import Card from "../../components/ExperiencePane/subcomponents/Card/Card";
import { ICardMediaQueryValues } from "./types";

export const GridExperiencePane = styled(ExperiencePane)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 1fr 1fr 1fr;
  }
`;

export const BigCard = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  background-color: black;
  background-image: url("src/assets/Samsung_Analytics_img.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 4px;

  display: flex;
  align-items: flex-end;

  @media (max-width: 600px) {
    grid-column: 1;
    grid-row: 1 / 4;
  }
`;

export const StyledCard = styled(Card)<{
  cardMediaQueryValues: ICardMediaQueryValues;
}>`
  grid-column: ${({ cardMediaQueryValues }) =>
    cardMediaQueryValues.LARGE.GRID_COLUMN};
  grid-row: ${({ cardMediaQueryValues }) =>
    cardMediaQueryValues.LARGE.GRID_ROW};

  > div:last-child {
    margin: 12px 0;
  }

  @media (max-width: 1280px) {
    grid-column: ${({ cardMediaQueryValues }) =>
      cardMediaQueryValues.MEDIUM.GRID_COLUMN};
    grid-row: ${({ cardMediaQueryValues }) =>
      cardMediaQueryValues.MEDIUM.GRID_ROW};
  }

  @media (max-width: 600px) {
    grid-column: ${({ cardMediaQueryValues }) =>
      cardMediaQueryValues.SMALL.GRID_COLUMN};
    grid-row: ${({ cardMediaQueryValues }) =>
      cardMediaQueryValues.SMALL.GRID_ROW};
  }
`;

export const BigCardInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 3fr;
  margin: 8px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    > div:first-child {
      padding: 12px 8px 12px 16px;
    }
  }
`;

export const InfoCard = styled.div<{ gridRow: string; gridCol: number }>`
  grid-column: ${({ gridCol }) => gridCol};
  grid-row: ${({ gridRow }) => gridRow};
  border-radius: 4px;
  margin: 4px;
  padding: 0 8px 0 16px;

  background-color: #f8e5d7cc;
  backdrop-filter: saturate(180%) blur(10px);
`;

export const CenteredTextContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
