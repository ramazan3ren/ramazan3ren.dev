import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full bg-lightCardColor dark:bg-darkThemeColor flex flex-col items-center justify-center py-24 px-4 lg:py-36 ">
        <h3 className="text-primaryColor dark:text-secondaryColor font-josefin w-full text-center text-xl">
          HİZMETLER
        </h3>
        <h3 className="text-darkThemeColor dark:text-white font-josefin w-full text-center text-2xl mt-2">
          Sizleri Neler Bekliyor?
        </h3>
        {/* <div className="w-full h-96 px-52 ">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div> */}
      </div>
    </>
  );
};
