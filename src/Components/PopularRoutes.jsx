import React from "react";

const PopularRoutes = () => {
  const routes = [
    { id: 1, city: "Dubai", Country: "UAE", image: "/assets/dubai.jpg" },
    { id: 2, city: "London", Country: "England", image: "/assets/london.jpg" },
    { id: 3, city: "New York", Country: "USA", image: "/assets/USA.jpg" },
    { id: 4, city: "Delhi", Country: "India", image: "/assets/delhi.jpg" },
    { id: 5, city: "Mumbai", Country: "India", image: "/assets/mumbai.jpg" },
    { id: 6, city: "Banglore", Country: "India", image: "/assets/banglore.jpg" },
    { id: 7, city: "Tokyo", Country: "Japan", image: "/assets/tokyo.jpg" },
    { id: 8, city: "Paris", Country: "France", image: "/assets/paris.jpg" },
  ];

  return (
    <div className="p-8 md:p-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 ">Popular Routes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
        {routes.map((route) => (
          <div
            key={route.id}
            className="relative rounded-[30px] overflow-hidden shadow-lg group"
          >
            <img
              src={route.image}
              alt={route.city}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className=" absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 group-hover:bg-opacity-75">
              <h3 className="text-lg font-bold">{route.city}</h3>
              <p className="text-sm uppercase ">{route.Country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
