import React from "react";
import { where } from "firebase/firestore";
import Card from "../components/Card";

const Important = () => {
  const ImportantFilter = [where("typeOfNote", "==", "IMPORTANT")];

  return <Card customFilter={ImportantFilter} />;
};

export default Important;
