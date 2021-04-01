import React from "react";
import { RouteComponentProps } from "react-router";
import Countries from "../../components/Countries";

const Country: React.FC<RouteComponentProps> = (props) => {
  const country = props.match.params;
  return <Countries country={country} />;
};

export default Country;
