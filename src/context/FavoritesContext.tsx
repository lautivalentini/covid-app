import { createContext } from "react";
import { FavArray } from "../type";

const FavoritesContext = createContext<FavArray>({
  favorites: [],
  setDataLocal(): void {},
  deleteDataLocal(): void {},
});

export default FavoritesContext;
