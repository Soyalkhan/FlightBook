import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          At <span className="text-teal-600">Flyanza</span> ✈️
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          We make your travel experience smoother and more affordable.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 md:p-10">
        <p className="text-gray-700 leading-relaxed text-lg">
          Our team, backed by years of expertise in the travel industry, is dedicated to
          revolutionizing the way people experience travel. We're not just here to help you
          book flights or trips; we're focused on creating a seamless, efficient, and
          user-friendly process that saves time and eliminates the unnecessary stress
          associated with traditional booking methods.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-6">
          By leveraging the latest technology and deep industry insights, we're cutting
          down on high costs and passing those savings on to our customers.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-teal-50 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">💰</div>
          <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
          <p className="text-gray-600 text-sm">
            We pass our savings directly to you with the most competitive rates.
          </p>
        </div>
        <div className="bg-teal-50 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="font-semibold text-gray-900 mb-2">Trusted Service</h3>
          <p className="text-gray-600 text-sm">
            Years of industry expertise ensuring a reliable booking experience.
          </p>
        </div>
        <div className="bg-teal-50 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="font-semibold text-gray-900 mb-2">Fast & Easy</h3>
          <p className="text-gray-600 text-sm">
            Seamless booking process that saves your time and effort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
