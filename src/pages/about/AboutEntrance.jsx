import React from "react";
import aboutPhoto from "../../assets/img/aboutPhoto.png";
import { AboutItems } from "./AboutItems";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export const AboutEntrance = () => {
  const aboutDetails = [
    {
      id: "1",
      title: "İsim :",
      value: "Ramazan Eren",
    },
    {
      id: "2",
      title: "Yaş :",
      value: "19",
    },
    {
      id: "3",
      title: "Konum :",
      value: "Türkiye",
    },
    {
      id: "4",
      title: "Mail :",
      value: "ramazan3ren@gmail.com",
    },
  ];
  return (
    <>
      <div className="w-full text-black dark:text-white bg-lightCardColor dark:bg-darkCardColor flex flex-col lg:flex-row items-center justify-center py-12 px-4 1080p:px-32 lg:py-36">
        <div className="w-full lg:w-auto lg:mr-8 flex lg:justify-end justify-center items-center">
          <img
            src={aboutPhoto}
            alt="Ramazan Eren"
            className="1080p:h-[400px] h-96 rounded-xl"
          />
        </div>
        <div className="lg:w-1/2 px-5 1080p:px-15 mt-10 lg:mt-0">
          <h2 className="px-0 text-md lg:text-xl text-primaryColor dark:text-secondaryColor font-josefin w-full uppercase text-left">
            Merhaba Ben Ramazan Eren
          </h2>
          <div className="border-b py-5 pb-7 border-primaryColor text-left">
            <p>
              Programlama dünyasına olan tutkum ve merakım, Selçuklu Türk
              Telekom Mesleki ve Teknik Anadolu Lisesi'nde Bilişim Teknolojileri
              Bölümü Web Tasarım ve Programlama dalında başladı. Lise eğitimimi
              başarıyla tamamlayarak, web tasarımı ve programlamadaki temel
              yeteneklerimi geliştirdim.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-7  whitespace-nowrap">
              {aboutDetails.map((detail) => {
                return <AboutItems detail={detail} key={detail.id} />;
              })}
            </div>
            <div className=" w-full flex flex-col-reverse items-center md:flex-row mt-5">
              <Link className="w-full md:w-48 text-center bg-primaryColor px-3 py-3 text-white rounded-2xl">
                CV'mi İndir
              </Link>
              <div className="w-full flex flex-row ml-0 md:ml-6 items-center mb-5 md:mb-0">
                <span className="w-24 h-full border-b-[3px] mr-6 border-primaryColor"></span>
                <div className="flex flex-row *:text-2xl *:mr-2 w-full">
                  <a
                    className="hover:text-primaryColor transition-all"
                    href="https://www.instagram.com/ramazan3ren"
                    target="_blank"
                  >
                    <BsInstagram />
                  </a>
                  <a
                    className="hover:text-primaryColor transition-all"
                    href="https://twitter.com/ramazan3ren"
                    target="_blank"
                  >
                    <RiTwitterXFill />
                  </a>
                  <a
                    className="hover:text-primaryColor transition-all"
                    href="https://github.com/ramazan3ren"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                  <a
                    className="hover:text-primaryColor transition-all"
                    href="https://www.linkedin.com/in/ramazan3ren/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
