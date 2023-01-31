import kristy from "../Images/Avatars/kristy.png";
import veronika from "../Images/Avatars/veronika.jpg";
import daniel from "../Images/Avatars/daniel.jpg";
import molly from "../Images/Avatars/molly.png";
import aqua from "../Images/Products/aqua.png";
import rose from "../Images/Products/rose.png";
import steel from "../Images/Products/steel.png";
import yellow from "../Images/Products/yellow.png";
import { v4 as uuidv4 } from "uuid";

export function generateVoteCount() {
  return Math.floor(Math.random() * 50 + 15);
}

export const Products = [
  {
    id: uuidv4(),
    number: 1,
    title: "Yellow Pail",
    description: "On-demand sand castle construction expertise.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: daniel,
    productImageUrl: aqua,
  },
  {
    id: uuidv4(),
    number: 2,
    title: "Supermajority: The Fantasy Congress League",
    description: "Earn points when your favorite politicians pass legislation.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: kristy,
    productImageUrl: rose,
  },
  {
    id: uuidv4(),
    number: 3,
    title: "Tinfoild: Tailored tinfoil hats",
    description: "We already have your measurements and shipping address.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: veronika,
    productImageUrl: steel,
  },
  {
    id: uuidv4(),
    number: 4,
    title: "Haught or Naught",
    description: "High-minded or absent-minded? You decide.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: molly,
    productImageUrl: yellow,
  },
];
