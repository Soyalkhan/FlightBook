import React from "react";

const PopularRoutes = () => {
  const routes = [
    { id: 1, city: "Madrid", price: "From $30", image: "/assets/r1.jpg" },
    { id: 2, city: "Oslo", price: "From $80", image: "/assets/r2.jpg" },
    { id: 3, city: "Doha", price: "From $380", image: "/assets/r3.jpg" },
    { id: 4, city: "New Jercy", price: "From $190", image: "/assets/r4.jpg" },
    { id: 5, city: "Delhi", price: "From $180", image: "/assets/r5.jpg" },
    { id: 6, city: "Bandglore", price: "From $160", image: "/assets/r6.jpg" },
    { id: 7, city: "Chaina", price: "From $130", image: "/assets/r7.jpg" },
    { id: 8, city: "Chaina", price: "From $2500", image: "/assets/r8.jpg" },
  ];

  return (
    <div className="p-8 md:p-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 ">Popular Routes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 group-hover:bg-opacity-75">
              <h3 className="text-lg font-bold">{route.city}</h3>
              <p className="text-sm">{route.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
