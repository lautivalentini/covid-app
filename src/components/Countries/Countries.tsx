import React, { useEffect, useState, useContext } from "react";

import style from "./Countries.module.scss";

import FavoritesContext from "../../context/Context";
import Country from "../Country";

interface Props {
  country: any;
}

interface CountryData {
  countryInfo: any;
  continent: string;
  country: string;
  population: number;
  cases: number;
  recovered: number;
}

const Countries: React.FC<Props> = ({ country }) => {
  const [countries, setCountries] = useState<CountryData>();

  const { favorites, setDataLocal, deleteDataLocal } = useContext(
    FavoritesContext
  );

  useEffect(() => {
    getCountries();
  });

  const getCountries = () => {
    const API_URL = `https://corona.lmao.ninja/v3/covid-19/countries/${country.country}`;
    try {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorite = (countries: any) => {
    const dataLocalStorage = localStorage.getItem("favorites") || "";
    if (dataLocalStorage !== "") {
      const parsedData = JSON.parse(dataLocalStorage);
      const fav = {
        country: countries?.country,
        image: countries?.countryInfo.flag,
      };
      parsedData.push(fav);
      localStorage.setItem("favorites", JSON.stringify(parsedData));
      setDataLocal(fav);
    } else {
      const fav = [
        {
          country: countries?.country,
          image: countries?.countryInfo.flag,
        },
      ];
      localStorage.setItem("favorites", JSON.stringify(fav));
      setDataLocal(fav);
    }
  };

  const deleteToFavorite = (countries: any) => {
    const dataLocalStorage = localStorage.getItem("favorites") || "";
    if (dataLocalStorage !== "") {
      const parsedData = JSON.parse(dataLocalStorage);
      if (parsedData.length === 1) {
        localStorage.removeItem("favorites");
        deleteDataLocal([]);
      } else {
        parsedData.forEach((item: any) => {
          if (item.country === countries?.country) {
            const index = parsedData.indexOf(item);
            parsedData.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(parsedData));
            deleteDataLocal(parsedData);
          }
        });
      }
    }
  };

  const filterCountries = favorites.filter((item) => {
    return item.country === countries?.country;
  });

  return (
    <div className={style.containerCountryInfo}>
      <Country
        addToFavorite={addToFavorite}
        deleteToFavorite={deleteToFavorite}
        countriesApi={countries}
        filterCountries={filterCountries}
      />
    </div>
  );
};

export default Countries;
