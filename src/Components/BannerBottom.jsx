import React from "react";
import LiveChatButton from "../Components/LiveChatButton";

const BannerBottom = () => {
  return (

    <>
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
          Get the Cheapest Flight Bookings with Unbeatable Deals!
        </h2>
        <p className="mb-4 text-sm md:text-base">
          Find the lowest fares to destinations worldwide. We compare prices from hundreds of airlines to bring you the best deals on every trip.
        </p>
        <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200">
         Book Now & Save Big
        </button>
      </div>
    </div>
    </div>
    {/* <LiveChatButton/> */}
    {/* <div className="flex justify-center items-center">
    <button className=" flex gap-3 justify-center items-center  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Live chat with Agent on WhatsApp  <MessageCircleMore  size={24} />
    </button>
    </div> */}
    </>
   

  );
};

export default BannerBottom;
