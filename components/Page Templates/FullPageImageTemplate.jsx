import React from "react";

const FullPageImageTemplate = ({ page }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative flex justify-center overflow-hidden pb-6 mb-6">
          <img
            src={page.featuredImage.url}
            alt=""
            className="h-full object-top w-auto object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default FullPageImageTemplate;
