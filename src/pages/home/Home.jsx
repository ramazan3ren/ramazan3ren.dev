import React from "react";
import { EntrancePart } from "./EntrancePart";
import { WhoAmI } from "./WhoAmI";
import { Services } from "./Services";

export const Home = () => {
  return (
    <>
      <EntrancePart />
      <WhoAmI />
      <Services />
    </>
  );
};
