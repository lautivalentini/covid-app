import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as Star } from "@fortawesome/free-regular-svg-icons";

import style from "./Country.module.scss";

interface Props {
  countriesApi: any;
  addToFavorite: Function;
  deleteToFavorite: Function;
  filterCountries: any;
}

const Country: React.FC<Props> = ({
  countriesApi,
  addToFavorite,
  deleteToFavorite,
  filterCountries,
}) => {
  return (
    <div className={style.countryData}>
      <img src={countriesApi?.countryInfo.flag} alt="" />
      {filterCountries.length > 0 ? (
        <button
          className={style.buttonFavorite}
          onClick={() => deleteToFavorite(countriesApi)}
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
      ) : (
        <button className={style.buttonFavorite}>
          <FontAwesomeIcon
            icon={Star}
            onClick={() => addToFavorite(countriesApi)}
          />
        </button>
      )}
      <div className={style.countryInfoTop}>
        <h2>{countriesApi?.country}</h2>
        <p>{countriesApi?.continent}</p>
        <h3>Population</h3>
        <p>{countriesApi?.population}</p>
      </div>
      <div className={style.countryInfoBottom}>
        <h3>Cases</h3>
        <p>{countriesApi?.cases}</p>
        <h3>Recovered</h3>
        <p>{countriesApi?.recovered}</p>
      </div>
    </div>
  );
};

export default Country;
