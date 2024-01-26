import { customer1, customer2, customer3 } from "../service/image/image";
import { Review } from "../types/type";

export const review: Review = [
  {
    name: "The best restaurant",
    fill: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    src: customer3,
    author: "Sophire Robson",
    address: "Los Angeles, CA",
  },
  {
    name: "Simply delicious",
    fill: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    src: customer2,
    author: "Matt Cannon",
    address: "San Diego, CA",
  },
  {
    name: "One of a kind restaurant",
    fill: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    src: customer1,
    author: "Andy Smith",
    address: "San Francisco, CA",
  },
];
