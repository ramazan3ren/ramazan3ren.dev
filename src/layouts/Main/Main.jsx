import React from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};
