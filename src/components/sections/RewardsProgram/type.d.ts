import { ProgressI } from "../Progress/type";
import { RewardCardsI } from "./RewardCards/type";

export interface RewardsProgramI {
  title: string;
  discription: string;
  points: {
    title: string;
    subTitle: string;
    pointsValues?: ProgressI[];
  };
  cards: RewardCardsI[];
}
