import React from "react";
import { Behance } from "./Behance";


export const PortfolioBody = () => {
  const projectIds = [
    {
      id: 1,
      pId: "208211257",
    },
    {
      id: 2,
      pId: "208204371",
    },
    {
      id: 3,
      pId: "207300957",
    },
    {
      id: 4,
      pId: "207759015",
    },
    {
      id: 5,
      pId: "208147269",
    },
    {
      id: 6,
      pId: "208974529",
    },
    {
      id: 7,
      pId: "209265019",
    },
    {
      id: 8,
      pId: "210609391",
    },
    {
      id: 9,
      pId: "211068193",
    },
    {
      id: 10,
      pId: "211794109",
    },
  ];
  return (
    <>
      <div className="w-full text-black dark:text-white bg-lightCardColor dark:bg-darkCardColor flex flex-col lg:flex-row items-center justify-center py-12 px-4 1080p:px-32 lg:py-36">
        <div className="sm:grid-cols-1 md:grid-cols-2 w-full md:w-5/6 grid grid-flow-row lg:grid-cols-3 gap-5">
          {projectIds.map((projectId) => {
            return <Behance projectId={projectId.pId} key={projectId.id} />;
          })}
        </div>
      </div>
    </>
  );
};

