import React from "react";
import { FaStar, FaCreditCard, FaMask } from "react-icons/fa";

const Assurance = () => {
  const assurances = [
    {
      id: 1,
      icon: <FaStar size={50} className="text-teal-600" />,
      title: "Guarantee of the best price",
      description:
        "We offer only the best deals, if you find the same flight cheaper elsewhere, contact us!",
    },
    {
      id: 2,
      icon: <FaCreditCard size={50} className="text-teal-600" />,
      title: "Refunds & cancellations",
      description:
        "Your flight got cancelled? We have you covered with our instant refund services.",
    },
    {
      id: 3,
      icon: <FaMask size={50} className="text-teal-600" />,
      title: "Safety measures",
      description:
        "Read about all the travel restrictions due to covid-19 that may affect your flight.",
    },
  ];

  return (
    <div className="p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {assurances.map((assurance) => (
          <div key={assurance.id} className="flex flex-col items-center">
            <div className="mb-4">{assurance.icon}</div>
            <h3 className="text-lg font-bold mb-2">{assurance.title}</h3>
            <p className="text-gray-600">{assurance.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assurance;
