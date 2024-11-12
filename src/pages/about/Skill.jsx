import React from "react";

import { SkillItem } from "./SkillItem";

export const Skill = () => {
  return (
    <>
      <div className="w-full text-black dark:text-white bg-lightCardColor dark:bg-darkCardColor flex flex-col lg:flex-row items-center justify-center py-12 px-4 1080p:px-32 lg:py-36">
        <div className="text-black dark:text-white w-80 lg:w-[400px] xl:mr-16 mr-0 mt-7 lg:mt-0 xl:[zoom:1.1]">
          <h1 className="text-primaryColor dark:text-secondaryColor text-xl font-josefin w-full">
            NELER BİLİYORUM
          </h1>
          <br />
          <p>
            React JS ile modern, dinamik arayüzler geliştirme ve Java ile
            backend süreçlerini yönetme konusunda deneyimliyim. Ayrıca, grafik
            tasarım ve video editi alanlarında çalışarak projelerime görsel ve
            yaratıcı katkılar sağlıyorum. Hem yazılım hem de tasarım
            becerilerimi kullanarak kullanıcı dostu, etkileyici çözümler
            üretiyorum.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-96 xl:w-[500px] lg:p-0 py-10 px-6">
          <SkillItem title={"Grafik Tasarım"} value={85} />
          <SkillItem title={"Video Edit"} value={65} />
          <SkillItem title={"Front-End"} value={70} />
          <SkillItem title={"Back-End"} value={50} />
        </div>
      </div>
    </>
  );
};
