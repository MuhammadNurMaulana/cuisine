export type Nav = {
  name: string;
  pathUrl: string;
}[];

export type Menu = {
  title: string;
  paragraph: string;
  src: string;
  pathUrl: string;
}[];

export type Events = {
  name: string;
  description: string;
  src: string;
}[];

export type Review = {
  name: string;
  fill: string;
  src: string;
  author: string;
  address: string;
}[];

export type menuFetch = {
  id: string;
  image: string;
  title: string;
  date: string;
  desc?: string;
};

export type InstaMenu = {
  src: string;
  alt: string;
}[];

export type CatalogVideo = {
  src: string;
  alt: string;
  name: string;
  desc: string;
}[];
