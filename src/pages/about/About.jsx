import React from "react";
import { PageDetail } from "../../layouts/PageDetail/PageDetail";
import { AboutEntrance } from "./AboutEntrance";
import { Resume } from "./Resume";

export const About = () => {
  return (
    <>
      <PageDetail pageName={"Hakkımda"} />
      <AboutEntrance />
      <Resume/>
    </>
  );
};
