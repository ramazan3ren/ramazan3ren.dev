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
      name: "Remy Sharp",
      jobs: "ABC Yönetim Kurulu Başkanı",
      comment:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      profilePhotos: "/static/images/avatar/1.jpg",
    },
    {
      commentId: "2",
      name: "Travis Howard",
      jobs: "İş Adamı",
      comment:
        "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      profilePhotos: "/static/images/avatar/2.jpg",
    },
    {
      commentId: "3",
      name: "Cindy Baker",
      jobs: "XYZ Yönetim Kurulu Üyesi",
      comment:
        "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
      profilePhotos: "/static/images/avatar/3.jpg",
    },
    {
      commentId: "4",
      name: "Laura Gill",
      jobs: "İnflucer",
      comment:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      profilePhotos: "/static/images/avatar/1.jpg",
    },
    {
      commentId: "5",
      name: "Nikita Adio",
      jobs: "QW Ajans",
      comment:
        "uia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est",
      profilePhotos: "/static/images/avatar/2.jpg",
    },
    {
      commentId: "6",
      name: "Smith Johns",
      jobs: "İş Adamı",
      comment:
        "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
      profilePhotos: "/static/images/avatar/3.jpg",
    },
  ];
  return (
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
