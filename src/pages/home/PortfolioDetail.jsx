import React from "react";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import { PortfolioItems } from "./PortfolioItems";
export const PortfolioDetail = () => {
  const portfolioDetails = [
    {
      id: "1",
      title: "Tamamlanan İş",
      count: 5,
      Icon: () => <LaptopMacRoundedIcon sx={{ fontSize: 70 }} />,
    },
    {
      id: "2",
      title: "Harcanan Süre",
      count: 220,
      Icon: () => <HourglassTopRoundedIcon sx={{ fontSize: 70 }} />,
    },
    {
      id: "3",
      title: "Alınan Ödül",
      count: 54,
      Icon: () => <EmojiEventsRoundedIcon sx={{ fontSize: 70 }} />,
    },
    {
      id: "4",
      title: "Mutlu Müşteri",
      count: 87,
      Icon: () => <SentimentVerySatisfiedRoundedIcon sx={{ fontSize: 70 }} />,
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
