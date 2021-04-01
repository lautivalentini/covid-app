import React, { useState } from "react";

import style from "./Card.module.scss";

import { CardInterface } from "../../card/types";

import Search from "../Search";

interface Props {
  results: CardInterface[];
}

const Card: React.FC<Props> = ({ results }) => {
  const [search, setSearch] = useState<string>("");

  const onFocusInput = (item: string) => {
    const search = document.getElementById(item);
    const div = document.getElementById(item + "div");
    const close = document.getElementById(item + "close");
    if (search && div && close) {
      search.style.display = "block";
      div.style.bottom = "-240px";
      close.style.display = "block";
    }
  };

  const handleClose = (item: string) => {
    const search = document.getElementById(item);
    const div = document.getElementById(item + "div");
    const close = document.getElementById(item + "close");
    if (search && div && close) {
      search.style.display = "none";
      div.style.bottom = "-40px";
      close.style.display = "none";
    }
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {results.map((item, i: number) => {
        return (
          <div className={style.card} key={i}>
            <div className={style.cardTitle}>
              <h3>{item.continent}</h3>
            </div>
            <div className={style.cardBody}>
              <div className={style.todayCases}>
                <h4>Today Cases</h4>
                <p>{item.todayCases}</p>
              </div>
              <div className={style.cases}>
                <h4>Total Cases</h4>
                <p>{item.cases}</p>
              </div>
              <div className={style.containerBottomCard}>
                <div className={style.recovered}>
                  <h5>Recovered</h5>
                  <p> {item.recovered}</p>
                </div>
                <div className={style.tests}>
                  <h5>Tests</h5>
                  <p> {item.tests}</p>
                </div>
              </div>
            </div>
            <div
              className={style.inputSearchCountry}
              id={item.continent.toLowerCase().replace(" ", "") + "div"}
            >
              <input
                type="text"
                placeholder="Search a country"
                onFocus={() =>
                  onFocusInput(item.continent.toLowerCase().replace(" ", ""))
                }
                onChange={handleChange}
              />
              <Search
                id={item.continent.toLowerCase().replace(" ", "")}
                countries={item.countries}
                search={search}
                handleClose={handleClose}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
