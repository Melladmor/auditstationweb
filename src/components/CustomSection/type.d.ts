import { TitleI } from "../Title/type";

export interface CustomSectionI {
  title?: TitleI;
  className?: string;
  children: React.ReactNode;
}
