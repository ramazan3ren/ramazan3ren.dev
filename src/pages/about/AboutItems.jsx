import React from "react";

export const AboutItems = ({ detail }) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <h1 className="font-extrabold  text-primaryColor mr-2">
          {detail.title}
        </h1>
        {detail.title == "Mail :" ? (
          <p>
            <a className="hover:text-primaryColor transition-all" href={`mailto:${detail.value}`}>{detail.value}</a>
          </p>
        ) : (
          <p>{detail.value}</p>
        )}
      </div>
    </>
  );
};
