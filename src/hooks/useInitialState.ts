import { useState, useEffect } from "react";

import { FavArray } from "../type";

const useInitialState = () => {
  const [favorites, setFavorites] = useState<FavArray[]>([]);
  const dataLocalStorage = localStorage.getItem("favorites") || "";

  useEffect(() => {
    if (dataLocalStorage !== "") {
      const parsedData = JSON.parse(dataLocalStorage);
      setFavorites(parsedData);
    }
  }, [dataLocalStorage]);

  const setDataLocal = (payload: any) => {
    if (dataLocalStorage !== "") {
      const parsedData = JSON.parse(dataLocalStorage);
      setFavorites([...parsedData, payload]);
    } else {
      setFavorites(payload);
      console.log(favorites);
    }
  };

  const deleteDataLocal = (payload: any) => {
    if (dataLocalStorage !== "") {
      setFavorites(payload);
    }
  };

  return {
    favorites: favorites,
    setDataLocal,
    deleteDataLocal,
  };
};

export default useInitialState;
