import React from "react";
import { MajorDonorCard, BoardMemberCard } from "..";

const GridTemplate = ({ page }) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex flex-col w-full">
        <h1 className="font-semibold text-3xl flex items-c mb-10">{page.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative">
            { page.gridModel == 'majorDonors' ? 
                page[`${page.gridModel}`].map((item, index) => (
                    <MajorDonorCard item={item} key={index} />
                ))
             : page.gridModel == 'boardMembers' ?
                page[`${page.gridModel}`].map((item, index) => (
                    <BoardMemberCard item={item} key={index} />
                ))
            : null
            }
        </div>
      </div>
    </div>
  );
};

export default GridTemplate;
