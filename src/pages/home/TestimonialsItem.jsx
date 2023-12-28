import React from "react";
import { Link } from "react-router-dom";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { Avatar } from "@mui/material";
export const TestimonialsItem = ({ commentDetail }) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-2"></div>
        <div className="flex flex-col w-full 4k:w-11/12 h-[340px] rounded-customFull bg-white dark:bg-darkCardColor text-darkThemeColor dark:text-white px-7 py-5">
          <div className="flex flex-row justify-between items-end pt-3">
            <span className="text-primaryColor rotate-180 ml-4">
              <FormatQuoteRoundedIcon sx={{ fontSize: 60 }} />
            </span>
            <span className="text-5xl mr-6 lg:mt-3 font-josefin font-extrabold">
              0{commentDetail.commentId}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center h-full ">
            <p className="text-[16px] lg:text-[19px] p-4 pt-0 w-full ">
              {commentDetail.comment}
            </p>
          </div>
          <span className="w-full text-center flex flex-row  items-center">
            <Avatar
              alt={commentDetail.name}
              src={commentDetail.profilePhotos}
              sx={{ width: 45, height: 45 }}
            />
            <span className="flex flex-col ml-4 items-start">
               <p className="font-extrabold">{commentDetail.name}</p>
              <p className="text-sm text-gray-400 font-extrabold">{commentDetail.jobs}</p>
            </span>
          </span>
        </div>
        <div className="w-2"></div>
      </div>
    </>
  );
};
