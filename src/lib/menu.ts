export type MenuKind = "drink" | "food";

export type MenuItem = {
  id: string;
  kind: MenuKind;
  /** Empty string = photo / copy still pending */
  name: string;
  category: string;
  description: string;
  /** null = reserved empty slot until client sends photo */
  image: string | null;
};

/**
 * Menu showcase: drinks + foods from client photos.
 */
export const menuHighlights: MenuItem[] = [
  {
    id: "drink-1",
    kind: "drink",
    name: "Sober Seoul Meets Tipsy KL",
    category: "Drink",
    description: "",
    image: "/menu/drink-01.png",
  },
  {
    id: "drink-2",
    kind: "drink",
    name: "The Tipsy Tiramisu",
    category: "Drink",
    description: "",
    image: "/menu/drink-02.png",
  },
  {
    id: "drink-3",
    kind: "drink",
    name: "Berry Rum and Rubble",
    category: "Drink",
    description: "",
    image: "/menu/drink-berry-rum-rubble.png",
  },
  {
    id: "drink-4",
    kind: "drink",
    name: "Tipsy Butterfly",
    category: "Drink",
    description: "",
    image: "/menu/drink-tipsy-butterfly.png",
  },
  {
    id: "food-1",
    kind: "food",
    name: "Hawaiian Pizza",
    category: "Food",
    description: "",
    image: "/menu/food-pizza.png",
  },
  {
    id: "food-2",
    kind: "food",
    name: "Paprika Pork Chop",
    category: "Food",
    description: "",
    image: "/menu/food-grilled-pork.png",
  },
  {
    id: "food-3",
    kind: "food",
    name: "Roasted Pork Belly platter with Coriander",
    category: "Food",
    description: "",
    image: "/menu/food-pork-belly.png",
  },
  {
    id: "food-4",
    kind: "food",
    name: "Chicken Karaage",
    category: "Food",
    description: "",
    image: "/menu/food-chicken-karaage.png",
  },
];
