export type News = {
  title: string;
  part_of_news?: string;
  category?: string;
  date?: string;
  imageSrc?: string;
};

export type Tweet = {
  name: string;
  text: string;
  date?: string;
  imageSrc: string;
};

export type Media = {
  title: string;
  date?: string;
  category: string;
  thumbnail: string;
  link: string;
};
