export interface NewsI {
  id: number;
  image: string;
  title: string;
  category: string;
  subCategory: string;
  publishDate: string;
  title: string;
  discription: string;
  readingTime: string;
  author: {
    name: string;
    image: string;
  };
}
