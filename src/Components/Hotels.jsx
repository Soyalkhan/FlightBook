import React from "react";
import { FaStar } from "react-icons/fa";

const hotels = [
  {
    id: 1,
    name: "The Grand Hotel",
    location: "New York, USA",
    rating: 4.5,
    price: "$200/night",
    image: "/src/assets/h1.jpg",
  },
  {
    id: 2,
    name: "Ocean View Resort",
    location: "Miami, USA",
    rating: 4.7,
    price: "$250/night",
    image: "/src/assets/h2.jpg",
  },
  {
    id: 3,
    name: "Mountain Escape",
    location: "Denver, USA",
    rating: 4.3,
    price: "$180/night",
    image: "/src/assets/h3.jpg",
  },
  {
    id: 4,
    name: "City Lights Inn",
    location: "Los Angeles, USA",
    rating: 4.6,
    price: "$220/night",
    image: "/src/assets/h4.jpg",
  },
  {
    id: 5,
    name: "City Lights Inn",
    location: "Los Angeles, USA",
    rating: 4.6,
    price: "$220/night",
    image: "/src/assets/h5.jpg",
  },
  {
    id: 6,
    name: "City Lights Inn",
    location: "Los Angeles, USA",
    rating: 4.6,
    price: "$220/night",
    image: "/src/assets/h6.jpg",
  },
  {
    id:7,
    name: "City Lights Inn",
    location: "Los Angeles, USA",
    rating: 4.6,
    price: "$220/night",
    image: "/src/assets/h7.jpg",
  },
  {
    id: 8,
    name: "City Lights Inn",
    location: "Los Angeles, USA",
    rating: 4.6,
    price: "$220/night",
    image: "/src/assets/h8.jpg",
  },
  {
    id: 9,
    name: "City Lights Inn",
    location: "Los Angeles, USA",
    rating: 4.6,
    price: "$220/night",
    image: "/src/assets/h9.jpg",
  },
  {
    id: 10,
    name: "City Lights Inn",
    location: "Los Angeles, USA",
    rating: 4.6,
    price: "$220/night",
    image: "/src/assets/h10.jpg",
  },
];

const Hotels = () => {
  return (
    <div>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/src/assets/hotelbanner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover Luxury Hotels</h1>
          <p className="text-lg md:text-xl">Experience comfort and style at the best prices</p>
        </div>
      </div>

      {/* Hotel List */}
      <div className="container mx-auto py-10 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{hotel.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{hotel.location}</p>
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < Math.round(hotel.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">{hotel.rating}</span>
                </div>
                <p className="text-teal-600 font-bold">{hotel.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
