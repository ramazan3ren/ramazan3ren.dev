import React from "react";
import photo from "../../assets/img/whoami.png";
export const WhoAmI = () => {
  return (
    <>
      <div className="w-screen bg-white dark:bg-darkCardColor flex flex-col lg:flex-row items-center justify-center py-11 lg:py-36">
        <div className="flex items-center justify-center w-[400px] h-[400px] lg:w-[410px] lg:h-[410px] lg:p-0 p-10">
          <img src={photo} alt="" />
        </div>
        <div className="text-black dark:text-white w-[300px] lg:w-[400px] md:ml-20 xl:ml-28 ml-0 mt-7 lg:mt-0 md:scale-105 xl:scale-110 text-center">
          <h1>BEN KİMİM?</h1>
          <br />
          <p>
            Dijital dünyada adımı duyurmuş bir web geliştiriciyim. Kodlamaya ve
            tasarıma olan sevgim, her projeye kendi özgün dokunuşumu katma
            arzumu güçlendiriyor.
          </p>
          <br />
          <p>
            Benim için sadece kod yazmak değil, aynı zamanda kullanıcıların
            ihtiyaçlarını anlamak, problemlerine çözümler üretmek önemli.
            Front-end ve back-end teknolojileriyle ilgileniyorum ve her geçen
            gün öğrenmeye, gelişmeye ve kendimi yenilemeye odaklanıyorum.
          </p>
        </div>
      </div>
    </>
  );
};
