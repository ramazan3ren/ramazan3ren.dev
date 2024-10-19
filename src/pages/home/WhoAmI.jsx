import React from "react";
import photo from "../../assets/img/whoami.png";
import { Link } from "react-router-dom";
export const WhoAmI = () => {
  const downloadPdf = () => {
    const link = document.createElement("a");

    link.href = "/src/assets/ramazan-eren-kocabaş-cv.pdf";
    link.download = "ramazan-eren-kocabaş-cv.pdf";
    link.click();
  };

  return (
    <>
      <div className="w-full bg-white dark:bg-darkCardColor flex flex-col lg:flex-row items-center justify-center py-24 px-4 lg:py-36 ">
        <div className="flex items-center justify-center w-80 h-80 xl:w-[410px] lg:h-[410px] lg:p-0 p-10">
          <img src={photo} alt="" />
        </div>
        <div className="text-black dark:text-white w-72 lg:w-[400px] lg:ml-20 xl:ml-28 ml-0 mt-7 lg:mt-0 text-center xl:[zoom:1.2]">
          <h1 className="text-primaryColor dark:text-secondaryColor text-xl font-josefin w-full">
            BEN KİMİM?
          </h1>
          <br />
          <p>
            Dijital dünyada adımı duyurmaya çalışan bir web geliştiriciyim.
            Kodlamaya ve tasarıma olan sevgim, her projeye kendi özgün
            dokunuşumu katma arzumu güçlendiriyor.
          </p>
          <br />
          <p>
            Benim için sadece kod yazmak değil, aynı zamanda kullanıcıların
            ihtiyaçlarını anlamak, problemlerine çözümler üretmek önemli.
            Front-end ve Back-end teknolojileriyle ilgileniyorum ve her geçen
            gün öğrenmeye, gelişmeye ve kendimi yenilemeye odaklanıyorum.
          </p>
          <div className="w-full flex flex-row justify-center mt-5">
            <button
              onClick={downloadPdf}
              className="bg-primaryColor hover:bg-secondaryColor px-4 py-3 text-white rounded-full transition-all"
            >
              CV'mi İndir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
