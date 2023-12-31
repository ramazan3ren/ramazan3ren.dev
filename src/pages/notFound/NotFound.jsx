import React from "react";
import Context from "../../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
export const NotFound = () => {
  const { windowDimensions } = useContext(Context);
  const [height, setHeight] = useState(windowDimensions.winHeight - 128);
  useEffect(() => {
    setHeight(windowDimensions.winHeight - 223);
  }, [height]);

  return (
    <>
      <div style={{ height: height + "px" }} className="not-found">
        <h1 className="text-5xl lg:text-6xl 1080p:text-[150px] font-josefin text-primaryColor text-center mb-3 lg:mb-9 font-extrabold">
          Oopss!
        </h1>
        <h3 className="text-xl lg:text-2xl 1080p:text-[50px] font-josefin text-primaryColor text-center mb-2 lg:mb-7">
          404 - Maalesef Böyle Bir Sayfa Bulunamadı...
        </h3>
        <p className="w-full text-sm px-3 1080p:px-80  1080p:text-xl text-center font-bold text-black dark:text-white mb-4 lg:mb-7">
          Aradığınız sayfanın adı değiştirilmiş veya geçici olarak
          kullanılamıyor olabilir.
        </p>
        <Link to="/" className="flex flex-row px-6 py-3 rounded-2xl border border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white dark:border-secondaryColor dark:text-secondaryColor dark:hover:text-white transition-all hover:transition-all">
          <ArrowBackIosRoundedIcon />
          Ana Sayfaya Dön
        </Link>
      </div>
    </>
  );
};
