import React from "react";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { PortfolioItems } from "./PortfolioItems";
export const PortfolioDetail = () => {
  const portfolioDetails = [
    {
      id: "1",
      title: "Devam Edilen Proje",
      count: 1,
      Icon: () => <LaptopMacRoundedIcon sx={{ fontSize: 70 }} />,
    },
    {
      id: "2",
      title: "Harcanan Süre",
      count: 480,
      Icon: () => <HourglassTopRoundedIcon sx={{ fontSize: 70 }} />,
    },

    {
      id: "3",
      title: "Tamamlanan Proje",
      count: 2,
      Icon: () => <DoneAllRoundedIcon sx={{ fontSize: 70 }} />,
    },
  ];

  return (
    <>
      <div className="w-full bg-white dark:bg-darkCardColor flex flex-row flex-wrap items-center justify-center py-14 px-0 lg:px-4 lg:py-24 ">
        {portfolioDetails.map((portfolioDetail) => {
          return (
            <PortfolioItems
              portfolioDetail={portfolioDetail}
              key={portfolioDetail.id}
              Icon={portfolioDetail.Icon}
            />
          );
        })}
      </div>
    </>
  );
};
