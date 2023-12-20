import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/img/photo.png";
import { TypeAnimation } from "react-type-animation";

// import { useContext } from "react";
// import Context from "../../context/context";

export const EntrancePart = () => {
  // const { colorTheme, windowDimensions } = useContext(Context);

  return (
    <>
      <div className="h-auto w-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-lightCardColor dark:bg-darkThemeColor py-28 px-4 lg:py-36 " >
       
        <div className="text-black dark:text-white w-[300px] lg:w-[400px] xl:mr-16 mr-0 mt-7 lg:mt-0 xl:[zoom:1.2]">
          <h2 className="text-primaryColor dark:text-secondaryColor font-montserrat w-0">
            Merhaba!
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-[320px] lg:w-[410px]">
            Ben <span className="font-semibold">Ramazan Eren</span>,
            <br /> bir{"  "}
            <TypeAnimation
              sequence={[
                "Freelancer'ım",
                1000,
                "Web Developer'ım",
                1000,
                "UI/UX Designer'ım",
                1000,
              ]}
              speed={20}
              className="inline-block text-lg sm:text-xl md:text-2xl lg:text-4xl"
              repeat={Infinity}
            />
          </div>
          <p className="text-sm md:text-md pt-4 w-[320px] ">
            İşte benim yeteneklerim, projelerim ve hizmetlerim hakkında detaylı
            bilgileri bulabileceğiniz bir platform.
          </p>
          <div className="flex flex-row mt-6">
            <Link className="bg-primaryColor px-3 py-3 mr-4 text-white rounded-2xl">
              İletişime Geç
            </Link>
            <Link className="px-6 py-3 rounded-2xl border border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white dark:border-secondaryColor dark:text-secondaryColor dark:hover:text-white transition-all">
              Portfolyo
            </Link>
          </div>
        </div>

        <div className="flex flex-row align-center justify-center ">
          <div className="flex items-center justify-center lg:w-[450px] w-[400px] h-[400px] lg:h-[450px] lg:p-0 p-10">
            <img src={photo} />
          </div>
        </div>
      </div>
    </>
  );
};
