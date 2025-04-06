export interface SocialLinksT {
  id: number;
  name:
    | "facebook"
    | "x"
    | "instagram"
    | "linkedin"
    | "telegram"
    | "whatsapp"
    | "youtube"
    | "snapchat"
    | "tiktok";
  url: string;
}

export interface RewardCardsI {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  discription?: string;
  className?: string;
  subClassName?: string;
  imageClassName?: string;
  links?: SocialLinksT[];
}
