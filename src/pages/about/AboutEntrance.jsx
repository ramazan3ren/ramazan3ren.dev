import React from "react";
import aboutPhoto from "../../assets/img/aboutPhoto.jpg";
export const AboutEntrance = () => {
  return (
    <>
      <div className="w-full bg-lightCardColor dark:bg-darkCardColor flex flex-col lg:flex-row items-center justify-center py-24 px-4 lg:py-36">
        <div className="w-96">
          <img
            src={aboutPhoto}
            alt="Ramazan Eren"
            className=":h-[600px] 1080p:h-96 rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-primaryColor dark:text-secondaryColor font-josefin w-full">
            MERHABA, BEN WEB GELİŞTİRİCİYİM 
          </h2>
        </div>
      </div>
    </>
  );
};
