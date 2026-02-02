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
    <div className="p-6 sm:p-8 md:p-12 lg:p-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Popular Routes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {routes.map((route) => (
          <div
            key={route.id}
            className="relative rounded-2xl sm:rounded-[30px] overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <img
              src={route.image}
              alt={route.city}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 w-full text-white p-4 sm:p-5 transform transition-transform duration-300 group-hover:translate-y-0">
              <h3 className="text-lg sm:text-xl font-bold drop-shadow-lg">{route.city}</h3>
              <p className="text-sm uppercase tracking-wider opacity-90">{route.Country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
