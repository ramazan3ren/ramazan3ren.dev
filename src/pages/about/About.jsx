import React from "react";
import { PageDetail } from "../../layouts/PageDetail/PageDetail";
import { AboutEntrance } from "./AboutEntrance";

export const About = () => {
  return (
    <>
      <PageDetail pageName={"Hakkımda"} />
      <AboutEntrance />
    </>
  );
};
