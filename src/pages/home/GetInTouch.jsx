import React from "react";
import { Link } from "react-router-dom";

export const GetInTouch = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-darkCardColor flex flex-row flex-wrap items-center justify-center py-10 px-0 lg:px-4 lg:py-24 ">
        <h3 className="text-primaryColor dark:text-secondaryColor font-josefin w-full text-center text-2xl">
          İLETİŞİME GEÇ
        </h3>
        <h3 className="text-darkThemeColor dark:text-white font-josefin w-full text-center text-xl xl:text-4xl mt-2">
          Haydi Projeye Başlayalım!
        </h3>
        <Link className="bg-primaryColor hover:bg-secondaryColor px-4 py-3 mt-4 text-white rounded-2xl text-xl">
          İletişime Geç!
        </Link>
      </div>
    </>
  );
};
