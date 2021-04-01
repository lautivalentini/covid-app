import React from "react";
import { Link } from "react-router-dom";

import style from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  countries: string[];
  id: string;
  search: string;
  handleClose: Function;
}

const Search: React.FC<Props> = ({ countries, id, search, handleClose }) => {
  const filteredCountries = countries.filter((item) => {
    return item.toLowerCase().includes(search);
  });

  return (
    <div className={style.countriesContainer} id={id}>
      <FontAwesomeIcon
        id={id + "close"}
        className={style.closeSearch}
        icon={faTimes}
        onClick={() => handleClose(id)}
      />
      {filteredCountries.map((country, i) => (
        <Link
          className={style.link}
          to={`/${country.toLowerCase()}`}
          key={i}
          onClick={() => handleClose(id)}
        >
          <div className={style.country}>
            <p>{country}</p>
            <FontAwesomeIcon
              className={style.iconLink}
              icon={faExternalLinkAlt}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Search;
