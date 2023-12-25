import React from "react";
import { Link } from "react-router-dom";

export const ServicesItem = ({ cardDetails, Icon }) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-2"></div>
        <div className="flex flex-col w-full 4k:w-11/12 h-[450px] rounded-customFull bg-white dark:bg-darkCardColor text-darkThemeColor dark:text-white p-6">
          <div className="flex flex-row justify-between mt-6 mb-7">
            <span className="ml-1">
              <Icon />
            </span>
            <span className="text-5xl mr-6 font-josefin font-extrabold">
              0{cardDetails.cardId}
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-josefin mb-2 text-primaryColor dark:text-secondaryColor">
              {cardDetails.title}
            </h3>
            <p className="text-[16px] xl:text-lg">{cardDetails.desc}</p>
          </div>
          <span className="w-full text-center h-full flex flex-col justify-end ">
            <Link className="px-6 font-josefin font-extrabold py-3 rounded-full border border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white dark:border-secondaryColor dark:text-secondaryColor dark:hover:text-white transition-all">
              Daha Fazla Bilgi
            </Link>
          </span>
        </div>
        <div className="w-2"></div>
      </div>
    </>
  );
};
