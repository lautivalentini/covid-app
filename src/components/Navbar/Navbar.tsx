import React, { useContext } from "react";
import { Link } from "react-router-dom";

import style from "./Navbar.module.scss";

import covid from "../../assets/covid.svg";

import FavoritesContext from "../../context/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as Star } from "@fortawesome/free-regular-svg-icons";

const Navbar: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  const hanldeClick = () => {
    const favorites = document.getElementById("favorites");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");
    if (favorites && openIcon && closeIcon) {
      favorites.style.display = "block";
      openIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  };
  const hanldeClickClose = () => {
    const favorites = document.getElementById("favorites");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");
    if (favorites && openIcon && closeIcon) {
      favorites.style.display = "none";
      openIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  };

  return (
    <div className={style.containerNavbar}>
      <div className={style.containerItems}>
        <Link className={style.linkToHome} to="/">
          <img src={covid} alt="covid" />
          <p>Covid-19</p>
        </Link>
        <div id="openIcon" className={style.containerFav} onClick={hanldeClick}>
          <FontAwesomeIcon id="iconDown" icon={Star} />
        </div>
        <div
          id="closeIcon"
          className={style.containerFavStar}
          onClick={hanldeClickClose}
        >
          <FontAwesomeIcon id="iconDown" icon={faStar} />
        </div>
        <div className={style.itemFavorite}>
          <div></div>
          <div id="favorites" className={style.favorites}>
            {favorites.map((item) => (
              <Link
                key={item.country}
                to={`/${item.country.toLowerCase()}`}
                className={style.items}
              >
                <img src={item.image} alt="" />
                <p>{item.country}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
