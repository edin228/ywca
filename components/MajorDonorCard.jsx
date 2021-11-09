import React from "react";

const MajorDonorCard = ({ item }) => {
  return (
    <a
      href={item.url}
      className="h-40 bg-gray-50 shadow-lg relative rounded w-full"
    >
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-40"
        style={{ backgroundImage: `url('${item.image.url}')` }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-20 from-gray-50 via-gray-100 to-red-400 w-full h-40" />
      <div className="flex items-center absolute bottom-5 w-full justify-center bg-red-400">
        <p className="inline align-middle text-white font-medium">
          {item.name}
        </p>
      </div>
    </a>
  );
};

export default MajorDonorCard;
