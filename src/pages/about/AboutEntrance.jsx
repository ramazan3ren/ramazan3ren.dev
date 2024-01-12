import React from "react";
import aboutPhoto from "../../assets/img/aboutPhoto.png";
export const AboutEntrance = () => {
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
      <div className="w-full text-black dark:text-white bg-lightCardColor dark:bg-darkCardColor flex flex-col lg:flex-row items-center justify-center py-12 px-4 1080p:px-32 lg:py-36">
        <div className="w-full lg:w-auto lg:mr-8 flex lg:justify-end justify-center items-center">
          <img
            src={aboutPhoto}
            alt="Ramazan Eren"
            className="1080p:h-[400px] h-96 rounded-xl"
          />
        </div>
        <div className="lg:w-1/2 px-7 1080p:px-11 mt-10 lg:mt-0">
          <h2 className="px-0 text-md lg:text-xl text-primaryColor dark:text-secondaryColor font-josefin w-full uppercase text-center lg:text-left">
            Merhaba Ben Ramazan Eren
          </h2>
          <div className="border-b py-5 pb-7 border-primaryColor text-center lg:text-left">
            <p>
              Programlama dünyasına olan tutkum ve merakım, Selçuklu Türk
              Telekom Mesleki ve Teknik Anadolu Lisesi'nde Bilişim Teknolojileri
              Bölümü Web Tasarım ve Programlama dalında başladı. Lise eğitimimi
              başarıyla tamamlayarak, web tasarımı ve programlamadaki temel
              yeteneklerimi geliştirdim.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
