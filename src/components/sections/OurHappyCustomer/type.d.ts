export type CategoryT = {
  id: number;
  name: string;
};
export interface OurHappyCustomersI {
  id: number;
  title: string;
  logo: string;
  category?: CategoryT[];
  description: string;
  cta?: string;
}
