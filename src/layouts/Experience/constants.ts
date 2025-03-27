import samsungLogo from "../../assets/Samsung_Logo.png";
import smLogo from "../../assets/SM_logo.svg";
import type { ILogoProps } from "../../components/BranchPanel/subcomponents/Logo/Logo";
import { ICardMediaQueryValues } from "./types";

export const SM_LOGO_DETAILS: ILogoProps = {
  src: smLogo,
  alt: "SM Supermalls logo",
  heightCss: "50px",
  topCss: "148px",
  leftCss: "97px",
};

export const SAMSUNG_LOGO_SPACING: ILogoProps = {
  src: samsungLogo,
  alt: "Samsung Electronics logo",
  heightCss: "35px",
  topCss: "157px",
  leftCss: "71px",
};

export const SMSNG_CARDS_MEDIAQUERY_VALUES: Record<
  "CARD1" | "CARD2",
  ICardMediaQueryValues
> = {
  CARD1: {
    LARGE: {
      GRID_COLUMN: "3",
      GRID_ROW: "1",
    },
    MEDIUM: {
      GRID_COLUMN: "1",
      GRID_ROW: "3",
    },
    SMALL: {
      GRID_COLUMN: "1",
      GRID_ROW: "4",
    },
  },
  CARD2: {
    LARGE: {
      GRID_COLUMN: "3",
      GRID_ROW: "2",
    },
    MEDIUM: {
      GRID_COLUMN: "2",
      GRID_ROW: "3",
    },
    SMALL: {
      GRID_COLUMN: "1",
      GRID_ROW: "5",
    },
  },
};
