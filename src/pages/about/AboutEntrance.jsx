import React from "react";
import aboutPhoto from "../../assets/img/aboutPhoto.jpg";
export const AboutEntrance = () => {
  return (
    <>
      <div className="w-full text-black dark:text-white bg-lightCardColor dark:bg-darkCardColor flex flex-col lg:flex-row items-center justify-center py-12 px-4 1080p:px-32 lg:py-36">
        <div className="w-full lg:w-1/2 flex lg:justify-end justify-center items-center">
          <img
            src={aboutPhoto}
            alt="Ramazan Eren"
            className="1080p:h-[400px] h-96 rounded-xl mr-5"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-primaryColor dark:text-secondaryColor font-josefin w-full uppercase">
            Merhaba Ben Ramazan Eren Kocabaş
          </h2>
          <div>
            <p>
              Programlama dünyasına olan tutkum ve merakım, Selçuklu Türk
              Telekom Mesleki ve Teknik Anadolu Lisesi'nde Bilişim Teknolojileri
              Bölümü Web Tasarım ve Programlama dalında başladı. Lise eğitimimi
              başarıyla tamamlayarak, web tasarımı ve programlamadaki temel
              yeteneklerimi geliştirdim.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
