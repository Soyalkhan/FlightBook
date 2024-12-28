// import React, { useState } from "react";
// import { Autocomplete, TextField } from "@mui/material";
// import { BiTransferAlt } from "react-icons/bi";

// const predefinedCities = [
//   "Agartala - Maharaja Bir Bikram Airport (IXA)",
//   "Agra - Pandit Deen Dayal Upadhyay Airport (AGR)",
//   "Ahmedabad - Sardar Vallabhbhai Patel International Airport (AMD)",
//   "Aizawl - Lengpui Airport (AJL)",
//   "Amritsar - Sri Guru Ram Dass Jee International Airport (ATQ)",
//   "Bagdogra - Bagdogra Airport (IXB)",
//   "Bangalore - Kempegowda International Airport (BLR)",
//   "Mumbai - Chhatrapati Shivaji Maharaj International Airport (BOM)",
//   "Los Angeles - Los Angeles International Airport (LAX)",
//   "New York - John F. Kennedy International Airport (JFK)",
//   "London - Heathrow Airport (LHR)",
//   "Paris - Charles de Gaulle Airport (CDG)",
//   "Dubai - Dubai International Airport (DXB)",
//   "Singapore - Changi Airport (SIN)",
// ];

// const uniquePredefinedCities = Array.from(new Set(predefinedCities));

// const Header = () => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [departDate, setDepartDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   const handleSwitch = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Navbar */}
//       <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
//         <div className="text-teal-600 font-bold text-2xl">SkyPlan</div>
//         <div className="flex items-center space-x-6">
        
       
//           <button className="bg-black text-white px-4 py-1 rounded-lg">Contact</button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div
//         className="relative h-96 bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: "url('/src/assets/planimagebanner.jpg')" }}
//       >
//         <h1 className="text-white text-4xl font-bold">Best deals are waiting for you</h1>
//       </div>

//       {/* Search Section */}
//       <div className="container mx-auto -mt-12">
//         <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//           {/* From Field */}
//           <div className="flex-1">
//             <label className="block text-gray-600 text-sm">From</label>
//             <Autocomplete
//               options={uniquePredefinedCities}
//               filterOptions={(options, { inputValue }) =>
//                 options.filter((option) =>
//                   option.toLowerCase().includes(inputValue.toLowerCase())
//                 )
//               }
//               value={from}
//               onInputChange={(event, newValue) => setFrom(newValue)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   placeholder="Enter Departure Location"
//                   fullWidth
//                   className="bg-white rounded-md"
//                 />
//               )}
//             />
//           </div>

//           {/* Switch button */}
//           <div className="flex justify-center items-center">
//             <button
//               className="bg-gray-200 rounded-full p-2"
//               onClick={handleSwitch}
//             >
//               <BiTransferAlt className="text-xl text-gray-500" />
//             </button>
//           </div>

//           {/* To Field */}
//           <div className="flex-1">
//             <label className="block text-gray-600 text-sm">To</label>
//             <Autocomplete
//               options={uniquePredefinedCities}
//               filterOptions={(options, { inputValue }) =>
//                 options.filter((option) =>
//                   option.toLowerCase().includes(inputValue.toLowerCase())
//                 )
//               }
//               value={to}
//               onInputChange={(event, newValue) => setTo(newValue)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   placeholder="Enter Destination"
//                   fullWidth
//                   className="bg-white rounded-md"
//                 />
//               )}
//             />
//           </div>

//           {/* Depart Field */}
//           <div className="flex-1">
//             <label className="block text-gray-600 text-sm">Departure</label>
//             <input
//               type="date"
//               value={departDate}
//               onChange={(e) => setDepartDate(e.target.value)}
//               className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//             />
//           </div>

//           {/* Return Field */}
//           <div className="flex-1">
//             <label className="block text-gray-600 text-sm">Return</label>
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
//             />
//           </div>

//           {/* Search button */}
//           <div>
//             <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg">
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;





import React, { useState } from 'react';
import { FaQuestionCircle, FaPlane, FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
            <img src="/src/assets/logo-main.png" alt="SkyPlane" className="h-12 w-36" />
            </Link>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <FaHotel className="text-lg text-gray-600" />
              <Link to="/hotels" className="text-gray-600">
              <span className="text-gray-600">Hotels</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
            <Link to="/flights">
              <FaPlane className="text-lg text-gray-600" />
              </Link>
              <span className="text-gray-600">Flights</span>
            </div>
            <Link to="/contact-us">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
              Contact
            </button>
            </Link>
           
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          
          <div className="flex items-center space-x-2">
          <Link to="/hotels">
            <FaHotel className="text-xl text-white" />
            <span className="text-white text-lg">Hotels</span>
             </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaPlane className="text-xl text-white" />
            <span className="text-white text-lg">Flights</span>
          </div>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

