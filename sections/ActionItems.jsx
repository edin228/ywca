import React from "react";
import Link from "next/link";

const ActionItems = () => {
  return (
    <div className="-mt-10 mb-8 z-40 px-0 md:px-10">
      <div className="py-8 action-itms-bg rounded-lg flex flex-col w-full items-center justify-center">
        <h3 className="font-semibold text-2xl md:w-1/2 text-center mb-4">
          Through advocacy and local programming we create real change for
          women, families, and communities.
        </h3>
        <div className="flex flex-col justify-center md:flex-row w-full items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd6id-YLLNc3AmeGPFEVnGU-yN-MCj69Py6yUZS0MDayVweUQ/viewform"
            target="_blank"
            className="cursor-pointer w-60 text-center mb-4 md:mb-0 md:mr-2 text-xl shadow-lg rounded bg-red-400 px-8 py-2 text-white transition duration-500 ease hover:bg-indigo-900"
          >
            Volunteer
          </a>
          <Link href="/mission">
            <div className="cursor-pointer w-60 text-center mb-4 md:mb-0 md:mr-2 text-xl shadow-lg rounded bg-red-400 px-8 py-2 text-white transition duration-500 ease hover:bg-indigo-900">
              {" "}
              Our Mission
            </div>
          </Link>
          <Link href="/history">
            <div className="cursor-pointer w-60 text-center mb-4 md:mb-0 md:mr-2 text-xl shadow-lg rounded bg-red-400 px-8 py-2 text-white transition duration-500 ease hover:bg-indigo-900">
              {" "}
              Our History
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionItems;
