import React from "react";

const BannerBottom = () => {
  return (
    <div className="pl-10 pr-10 pb-10">

<div
      className="relative bg-cover bg-center rounded-[30px] overflow-hidden shadow-md p-6 md:p-16"
      style={{
        backgroundImage: "url('/assets/banner2.jpg')", // Replace with the actual image path
        minHeight: "200px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col justify-center items-start h-full">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Get our new mobile app and book flights with 10% discount!
        </h2>
        <p className="mb-4 text-sm md:text-base">
          Download our new SkyPlane app and have control of your trips in your
          pocket. With our app you’ll get secret deals and extra booking
          discounts.
        </p>
        <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200">
          Affordable then you think
        </button>
      </div>
    </div>
    </div>

  );
};

export default BannerBottom;
