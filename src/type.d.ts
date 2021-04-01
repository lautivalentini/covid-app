export interface FavObject {
  country: string;
  image: string;
}

export interface FavArray {
  favorites: FavObject[];
  setDataLocal: Function;
  deleteDataLocal: Function;
}
