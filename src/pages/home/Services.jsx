import React from "react";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";

import Slider from "react-slick";
import { ServicesItem } from "./ServicesItem";
import { useContext } from "react";
import Context from "../../context/context";

export const Services = () => {
  const { colorTheme } = useContext(Context);

  const NextArrow = (props) => {
    const { onClick } = props;

    return (
      <div className="top-1/2 absolute -right-8" onClick={onClick}>
        <ArrowForwardIosRoundedIcon
          style={{
            color: colorTheme == "light" ? "white" : "black",
            fontSize: 30,
          }}
        />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;

    return (
      <div className="top-1/2 absolute -left-8" onClick={onClick}>
        <ArrowBackIosRoundedIcon
          style={{
            color: colorTheme === "light" ? "white" : "black",
            fontSize: 30,
          }}
        />
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const cardDetails = [
    {
      cardId: "1",
      title: "Web Geliştirme",
      desc: "Modern teknolojiler ve programlama dillerini kullanarak özel web çözümleri oluşturuyorum. HTML, CSS, JavaScript ve mobil duyarlı tasarımlarla kullanıcı dostu ve performans odaklı web siteleri tasarlıyorum.",
      Icon: () => <DataObjectRoundedIcon sx={{ fontSize: 50 }} />,
    },
    {
      cardId: "2",
      title: "UI/UX Tasarım",
      desc: "Görsel uyum, renk paletleri ve kullanıcı deneyimini optimize ederek estetik ve kullanılabilir arayüzler oluşturuyorum. Kullanıcıların istedikleri bilgilere kolayca ulaşmalarını sağlayan gezinme akışlarını geliştiriyorum.",
      Icon: () => <DesignServicesRoundedIcon sx={{ fontSize: 50 }} />,
    },
    {
      cardId: "3",
      title: "Grafik Tasarım",
      desc: "Logo, broşür, afiş ve diğer pazarlama malzemeleri üzerine özenle çalışarak marka kimliğini güçlendiriyorum. Her tasarımım, müşterinin markasını benzersiz kılmak ve hedef kitlesini etkilemek için özel olarak oluşturuluyor.",
      Icon: () => <ArchitectureRoundedIcon sx={{ fontSize: 50 }} />,
    },
  ];

  return (
    <>
      <div className="w-full bg-lightCardColor dark:bg-darkThemeColor flex flex-col items-center justify-center py-16 lg:pb-6 ">
        <h3 className="text-primaryColor dark:text-secondaryColor font-josefin w-full text-center text-2xl">
          HİZMETLER
        </h3>
        <h3 className="text-darkThemeColor dark:text-white font-josefin w-full text-center text-3xl mt-2">
          Sizleri Neler Bekliyor?
        </h3>
        <div className="w-full h-[390px] lg:h-[512px] px-5  xl:px-52 mt-7 lg:mt-14">
          <Slider {...settings}>
            {cardDetails.map((cardDetail) => {
              return (
                <ServicesItem
                  cardDetails={cardDetail}
                  Icon={cardDetail.Icon}
                  key={cardDetail.cardId}
                />
              );
            })}
          </Slider>
        </div>
        <div className="h-14 lg:h-0"></div>
      </div>
    </>
  );
};
