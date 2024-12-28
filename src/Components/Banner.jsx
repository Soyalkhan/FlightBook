import React from 'react';
import BookingForm from './BookingForm'; // Import the booking form component

const Banner = () => {
  return (
    <div className="p-6 md:p-10">
    <div className="relative bg-cover bg-center rounded-[30px] overflow-hidden shadow-lg"
         style={{
           backgroundImage: `url('/src/assets/planimagebanner.jpg')`,
           minHeight: '600px',
         }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full px-4 md:px-10 text-center text-white">
        <h1 className="text-[3.2rem] md:text-[3.2rem] font-bold mb-6 mt-44 ">
          Best deals are waiting for you
        </h1>
      </div>

      {/* Booking Form */}
     
    </div>
    <BookingForm />
    </div>

  );
};

export default Banner;
