// import React, { useState } from 'react';
// import { FaArrowRight , FaWhatsapp} from 'react-icons/fa';

// const BookingForm = () => {
//   const [tripType, setTripType] = useState('round-trip');
//   const [passengers, setPassengers] = useState(1);

//   return (
//     <div className="p-6 md:p-10 relative mx-auto">
//       <div
//         className="relative bg-white rounded-[30px] p-6 w-full max-w-6xl shadow-lg mx-auto flex flex-col "
//         style={{
//           marginTop: 'calc(10% - 20.5rem)', // Adjusted for desktop
//         }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-center">
//           {/* Trip Type */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-medium block mb-2">Trip Type</label>
//             <select
//               value={tripType}
//               onChange={(e) => setTripType(e.target.value)}
//               className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600 appearance-none"
//               style={{
//                 backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /%3E%3C/svg%3E')`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'right 10px center',
//                 backgroundSize: '16px',
//               }}
//             >
//               <option value="round-trip">Round Trip</option>
//               <option value="one-way">One Way</option>
//             </select>
//           </div>

//            {/* Passengers */}
//            <div className="col-span-1">
//                 <label className="text-gray-700 font-medium block mb-2">Passengers</label>
//                 <select
//                   value={passengers}
//                   onChange={(e) => setPassengers(e.target.value)}
//                   className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600 appearance-none"
//                   style={{
//                     backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /%3E%3C/svg%3E')`,
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'right 10px center',
//                     backgroundSize: '16px',
//                   }}
//                 >
//                   {Array.from({ length: 10 }, (_, i) => (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1} {i + 1 === 1 ? 'Passenger' : 'Passengers'}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//           {/* From */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-medium block mb-2">From</label>
//             <input
//               type="text"
//               placeholder="Source"
//               className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600"
//             />
//           </div>

//           {/* To */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-medium block mb-2">To</label>
//             <input
//               type="text"
//               placeholder="Destination"
//               className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600"
//             />
//           </div>

//           {/* Departure Date */}
//           <div className="col-span-1">
//             <label className="text-gray-700 font-medium block mb-2">Departure</label>
//             <input
//               type="date"
//               placeholder="Add date"
//               className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600"
//               onFocus={(e) => (e.target.type = 'date')} // Show date picker on focus
//               onBlur={(e) => (e.target.type = 'text')} // Show placeholder on blur
//             />
//           </div>

//           {/* Return Date and Passengers */}
//           {tripType === 'round-trip' && (
//             <div className="col-span-1 md:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Return Date */}
//               <div className="col-span-1">
//                 <label className="text-gray-700 font-medium block mb-2">Return</label>
//                 <input
//                   type="text"
//                   placeholder="Add date"
//                   className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600"
//                   onFocus={(e) => (e.target.type = 'date')} // Show date picker on focus
//                   onBlur={(e) => (e.target.type = 'text')} // Show placeholder on blur
//                 />
//               </div>

//             </div>
//           )}
//         </div>

//         <div className="flex flex-col md:flex-row items-center mt-4 gap-4 justify-center">
//           {/* Submit Button */}
//           <button className="w-[200px] md:w-auto bg-teal-600 text-white p-4 rounded-md hover:bg-teal-700 flex items-center justify-center">
//             <span className='mr-6'>Send enquiry</span> <FaWhatsapp className="text-lg" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;
import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { FaWhatsapp, FaPlane } from "react-icons/fa";

const predefinedCities = [
  { name: "Agartala - Maharaja Bir Bikram Airport (IXA)", city: "Agartala" },
  { name: "Agra - Pandit Deen Dayal Upadhyay Airport (AGR)", city: "Agra" },
  { name: "Ahmedabad - Sardar Vallabhbhai Patel International Airport (AMD)", city: "Ahmedabad" },
  { name: "Aizawl - Lengpui Airport (AJL)", city: "Aizawl" },
  { name: "Amritsar - Sri Guru Ram Dass Jee International Airport (ATQ)", city: "Amritsar" },
  { name: "Bagdogra - Bagdogra Airport (IXB)", city: "Bagdogra" },
  { name: "Bangalore - Kempegowda International Airport (BLR)", city: "Bangalore" },
  { name: "Mumbai - Chhatrapati Shivaji Maharaj International Airport (BOM)", city: "Mumbai" },
  { name: "Los Angeles - Los Angeles International Airport (LAX)", city: "Los Angeles" },
  { name: "New York - John F. Kennedy International Airport (JFK)", city: "New York" },
  { name: "London - Heathrow Airport (LHR)", city: "London" },
  { name: "Paris - Charles de Gaulle Airport (CDG)", city: "Paris" },
  { name: "Dubai - Dubai International Airport (DXB)", city: "Dubai" },
  { name: "Singapore - Changi Airport (SIN)", city: "Singapore" },
];

const BookingForm = () => {
  const [tripType, setTripType] = useState("round-trip");
  const [passengers, setPassengers] = useState(1);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEnquiry = () => {
    if (!from || !to || !departureDate || (tripType === "round-trip" && !returnDate)) {
      setMessage("Please fill all required fields.");
      return;
    }

    const enquiryDate = new Date().toLocaleDateString();

    const whatsappMessage = `Enquiry Details:

Trip Type: ${tripType}
From: ${from.name}
To: ${to.name}
Departure: ${departureDate}
${
  tripType === "round-trip" ? `Return: ${returnDate}\n` : ""
}Passengers: ${passengers}
Date of Enquiry: ${enquiryDate}`;

    const whatsappUrl = `https://wa.me/7535964612?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    setMessage("Enquiry sent successfully!");
  };

  return (
    <div className="p-6 md:p-10 relative mx-auto">
      <div
        className="relative bg-white rounded-[30px] p-6 w-full max-w-6xl shadow-lg mx-auto flex flex-col"
        style={{ marginTop: "calc(10% - 20.5rem)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-center">
          {/* Trip Type */}
          <div className="col-span-1">
            <label className="text-gray-700 font-medium block mb-2">Trip Type</label>
            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600"
            >
              <option value="round-trip">Round Trip</option>
              <option value="one-way">One Way</option>
            </select>
          </div>

          {/* From */}
          <div className="col-span-2">
            <label className="text-gray-700 font-medium block mb-2">From</label>
            <Autocomplete
              options={predefinedCities}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <li {...props} className="flex items-center gap-2">
                  <FaPlane className="text-teal-600" />
                  <div>
                    <div>{option.name}</div>
                    <div className="text-gray-500 text-sm">{option.city}</div>
                  </div>
                </li>
              )}
              value={from}
              onChange={(event, newValue) => setFrom(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Enter Departure Location"
                  fullWidth
                  className="bg-white rounded-md"
                />
              )}
            />
          </div>

          {/* To */}
          <div className="col-span-2">
            <label className="text-gray-700 font-medium block mb-2">To</label>
            <Autocomplete
              options={predefinedCities}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <li {...props} className="flex items-center gap-2 ">
                  <FaPlane className="text-teal-600" />
                  <div className="">
                    <div>{option.name}</div>
                    <div className="text-gray-500 text-sm">{option.city}</div>
                  </div>
                </li>
              )}
              value={to}
              onChange={(event, newValue) => setTo(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Enter Destination"
                  fullWidth
                  className="bg-white rounded-md"
                />
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Departure Date */}
          <div className="col-span-1">
            <label className="text-gray-700 font-medium block mb-2">Departure</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Return Date */}
          {tripType === "round-trip" && (
            <div className="col-span-1">
              <label className="text-gray-700 font-medium block mb-2">Return</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600"
              />
            </div>
          )}
        </div>

        {/* Passengers */}
        <div className="mt-4">
          <label className="text-gray-700 font-medium block mb-2">Passengers</label>
          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-full border-r border-l border-gray-300 p-2 rounded-md focus:outline-none placeholder-gray-500 focus:ring-2 focus:ring-teal-600"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i + 1 === 1 ? "Passenger" : "Passengers"}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSendEnquiry}
            className="bg-teal-600 text-white p-4 rounded-md hover:bg-teal-700 flex items-center"
          >
            <span className="mr-2">Send enquiry</span>
            <FaWhatsapp className="text-lg" />
          </button>
        </div>

        {message && <p className="text-center text-green-600 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default BookingForm;
