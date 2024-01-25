import React from "react";
import LaptopWindowsRoundedIcon from "@mui/icons-material/LaptopWindowsRounded";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import { ResumeItems } from "./ResumeItems";
export const Resume = () => {
  const resumeObject = [
    {
      id: "1",
      Icon: () => <LaptopWindowsRoundedIcon sx={{ fontSize: 40 }} />,
      title: "Responsive Tasarım",
      value:
        "Web sitesinin veya uygulamanın farklı cihazlarda ve ekran boyutlarında sorunsuz bir şekilde çalışmasını sağlar.",
    },
    {
      id: "2",
      Icon: () => <MonitorRoundedIcon sx={{ fontSize: 40 }} />,
      title: "Yaratıcı Tasarım",
      value:
        "Yaratıcı tasarım, estetik ve işlevselliği birleştirerek etkileyici görsel tasarım oluşturulmasıdır.",
    },
    {
      id: "3",
      Icon: () => <SupervisorAccountRoundedIcon sx={{ fontSize: 40 }} />,
      title: "Yönetim Paneli",
      value:
        "Web uygulamasının arkasındaki içeriği yönetmek için kullanılan arayüzdür.",
    },
  ];
  return (
    <>
      <div className="w-full bg-white dark:bg-darkThemeColor py-24 flex flex-col items-center justify-center lg:py-36">
        <div className="1080p:px-64 lg:px-40 px-10 mb-10">
          <h2 className="uppercase font-josefin mb-5 text-lg lg:text-3xl text-primaryColor">
            İşinize Yeni ve Yaratıcı Bir Başlangıç Yapabilirim!
          </h2>
          <p className="text-black lg:text-[16px] dark:text-white">
            Web tasarım ve programlama alanındaki deneyimlerim, beni yaratıcı
            düşünceyle problem çözmeye ve kullanıcı dostu çözümler üretmeye
            teşvik etti. İlerleyen dönemlerde, yazılım dünyasındaki gelişmeleri
            yakından takip ederek, daha karmaşık projelerde yer almayı ve
            kendimi sürekli olarak yenmeyi hedefliyorum. Bana her türlü soru,
            öneri veya işbirliği için ulaşmaktan çekinmeyin.
          </p>
        </div>
        <div className="grid grid-flow-row lg:grid-flow-col w-full 1080p:px-60  px-10 ">
          {resumeObject.map((resumeItem) => {
            return (
              <ResumeItems
                key={resumeItem.id} 
                items={resumeItem}
                Icon={resumeItem.Icon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
