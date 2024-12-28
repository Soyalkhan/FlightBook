import React from "react";

const DataPolicy = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-teal-600 mb-6">Data Policy</h1>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This Data Policy outlines the types of data we collect, how it is used, and how we protect your information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Data Collection</h2>
        <p className="text-gray-700 mb-2">
          We may collect the following types of data when you use our platform:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Personal details such as your name, email address, and phone number.</li>
          <li>Payment information for processing bookings.</li>
          <li>Travel preferences and booking history.</li>
          <li>Browser and device information to improve user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. Data Usage</h2>
        <p className="text-gray-700 mb-4">
          The data we collect is used for the following purposes:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Facilitating flight and hotel bookings.</li>
          <li>Providing customer support and responding to inquiries.</li>
          <li>Sending updates, offers, and promotional material.</li>
          <li>Improving our services and user experience through analytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Data Sharing</h2>
        <p className="text-gray-700 mb-4">
          We do not sell your personal data. However, we may share your data with trusted partners for the purpose of:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Processing payments and bookings.</li>
          <li>Compliance with legal obligations.</li>
          <li>Providing services through third-party providers (e.g., airlines, hotels).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">4. Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We implement robust security measures to protect your data from unauthorized access, disclosure, or alteration. This includes:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Encrypted storage of sensitive information.</li>
          <li>Secure payment gateways.</li>
          <li>Regular audits of our data protection practices.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">5. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Access and update your personal data.</li>
          <li>Request deletion of your data.</li>
          <li>Opt-out of receiving promotional communications.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">6. Updates to this Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Data Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. You will be notified of any significant updates.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">7. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this Data Policy, please contact us at:
        </p>
        <p className="text-teal-600 font-semibold">support@flightbook.com</p>
      </div>
    </div>
  );
};

export default DataPolicy;
