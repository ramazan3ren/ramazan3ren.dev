import React from "react";

export const NotFound = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center  dark:bg-darkThemeColor py-28 px-6 mt-24">
        <h1 className="text-5xl md:text-[150px] font-josefin text-primaryColor text-center mb-9">Oopss!</h1>
        <h3 className="text-2xl md:text-[50px] font-josefin text-primaryColor text-center mb-7">
          404 - Maalesef Böyle Bir Sayfa Bulunamadı...
        </h3>
        <p className="text-sm md:text-xl text-center text-white">Aradığınız sayfanın adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.</p>
      </div>
      
    </>
  );
};
