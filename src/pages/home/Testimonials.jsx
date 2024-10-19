import React from "react";
import Slider from "react-slick";
import { TestimonialsItem } from "./TestimonialsItem";

export const Testimonials = () => {
  var settings = {
    infinite: true,
    autoplaySpeed: 6000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
  };

  const commentDetails = [
    {
      commentId: "1",
      name: "mehmetsaklier",
      jobs: "Bionluk",
      comment: "Çok başarılısın. Başarılarının devamını dilerim dostum. 👍",
      profilePhotos: "/static/images/avatar/1.jpg",
    },
    {
      commentId: "2",
      name: "sarpalisel",
      jobs: "Bionluk",
      comment: "Kaliteli hizmet. Sizinle çalışmak çok güzeldi.",
      profilePhotos: "/static/images/avatar/2.jpg",
    },
    {
      commentId: "3",
      name: "canharman",
      jobs: "Bionluk",
      comment:
        "Çok başarılı işler çıkartıyorsun kardeşim Youtube kanalımı efsane yaptın teşekkür ederim tekrardan",
      profilePhotos: "/static/images/avatar/3.jpg",
    },
    {
      commentId: "4",
      name: "serkanturhan",
      jobs: "Bionluk",
      comment: "Istedigim isi istedigim zaman araliginda yapti. Tesekkurler.",
      profilePhotos: "/static/images/avatar/1.jpg",
    },
    {
      commentId: "5",
      name: "sametcakir34",
      jobs: "Bionluk",
      comment: "Calismalarinizda basarilar diliyiyorum. iyi calismalar",
      profilePhotos: "/static/images/avatar/2.jpg",
    },
    {
      commentId: "6",
      name: "in_acar",
      jobs: "Bionluk",
      comment: "Her konuda yardımcı oldu teşekkür ederiz.",
      profilePhotos: "/static/images/avatar/3.jpg",
    },
    {
      commentId: "7",
      name: "mertsabah12",
      jobs: "Bionluk",
      comment: "yapmış olduğunuz tasarımları çok beğendik teşekkür ederiz",
      profilePhotos: "/static/images/avatar/3.jpg",
    },
  ];
  return commentDetails.length == 0 ? (
    <></>
  ) : (
    <>
      <div className="w-full bg-lightCardColor dark:bg-darkThemeColor flex flex-col items-center justify-center py-16 lg:pb-6 ">
        <h3 className="text-primaryColor dark:text-secondaryColor font-josefin w-full text-center text-2xl">
          GÖRÜŞLER
        </h3>
        <h3 className="text-darkThemeColor dark:text-white font-josefin w-full text-center text-lg xl:text-3xl mt-2">
          Müşterilerim Hakkımda Ne Düşünüyor?
        </h3>
        <div className="w-full 1080:w-10/12 h-[290px] lg:h-[400px] xl:px-36 1080:px-52 mt-7 lg:mt-14">
          <Slider {...settings}>
            {commentDetails.map((commentDetail) => {
              return (
                <TestimonialsItem
                  commentDetail={commentDetail}
                  key={commentDetail.commentId}
                />
              );
            })}
          </Slider>
        </div>
        <div className="h-10 lg:h-0"></div>
      </div>
    </>
  );
};
