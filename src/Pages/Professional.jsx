import React from "react";
import { where } from "firebase/firestore";
import Card from "../components/Card";

const Professional = () => {
  const professionalFilter = [where("typeOfNote", "==", "Professional")];

  return <Card customFilter={professionalFilter} />;
};

export default Professional;
