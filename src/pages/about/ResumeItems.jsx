import React from "react";

export const ResumeItems = ({ Icon, items }) => {
  return (
    <>
      <div className="flex flex-row text-black dark:text-white mr-5 lg:px-4 mb-6">
        <span className="mr-5 ">
          <Icon />
        </span>
        <div>
          <h3 className="uppercase 1080p:text-xl text-primaryColor font-josefin mb-1">
            {items.title}
          </h3>
          <p className="text-sm">{items.value}</p>
        </div>
      </div>
    </>
  );
};
