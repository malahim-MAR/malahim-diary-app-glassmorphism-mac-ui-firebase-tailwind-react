import React from "react";
import { where } from "firebase/firestore";
import Card from "../components/Card";

const Shopping = () => {
  const ShoppingFilter = [where("typeOfNote", "==", "Shopping")];

  return <Card customFilter={ShoppingFilter} />;
};

export default Shopping;
