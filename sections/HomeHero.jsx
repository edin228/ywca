import React from "react";

const HomeHero = () => {
  return (
    <div className="w-full absolute top-0 ">
      <div className="relative flex justify-center">
        <div className="flex justify-center items-center text-pos text-white absolute z-20 text-3xl font-semibold">
            <div className="flex items-center">
              <span className="wide-text text-shadow">ELIMINATING RACISM</span>
              <span className="wide-text text-shadow text-red-400 mr-4">.</span>
            </div>
            <div className="flex items-center">
              <span className="wide-text text-shadow">EMPOWERING WOMEN</span>
              <span className="wide-text text-shadow text-red-400">.</span>
            </div>
        </div>
        <video className="absolute w-full object-cover raise-video  overflow-hidden" autoPlay muted loop>
          <source
            src="https://media.graphcms.com/SAwbh8c2TcmYSUzvXG7U"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default HomeHero;
