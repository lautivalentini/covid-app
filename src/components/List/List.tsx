import React from "react";
import Card from "../Card";
import style from "./List.module.scss";
import useData from "../../hooks/useData";

const List: React.FC = () => {
  const API_URL = "https://corona.lmao.ninja/v3/covid-19/continents";
  const continents = useData(API_URL);

  return (
    <div className={style.containerList}>
      <Card results={continents} />
    </div>
  );
};

export default List;
