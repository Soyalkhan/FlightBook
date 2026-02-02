import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          We are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, and safeguard your data
          when you use our flight booking services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">Personal identification information (name, email address, phone number)</li>
          <li className="mb-2">Payment information for processing bookings</li>
          <li className="mb-2">Travel preferences and booking history</li>
          <li>Device and browser information for improving our services</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">To process and manage your flight bookings</li>
          <li className="mb-2">To communicate booking confirmations and updates</li>
          <li className="mb-2">To provide customer support and respond to inquiries</li>
          <li>To improve our services and user experience</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement appropriate security measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction. Your data is stored securely
          and access is restricted to authorized personnel only.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Third-Party Sharing</h2>
        <p className="text-gray-700 leading-relaxed">
          We may share your information with airlines and travel partners to fulfill your booking
          requests. We do not sell your personal information to third parties for marketing purposes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">Access and review your personal information</li>
          <li className="mb-2">Request corrections to inaccurate data</li>
          <li className="mb-2">Request deletion of your personal information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about our Privacy Policy or how we handle your data, please
          contact us at{" "}
          <a href="mailto:support@flyanza.com" className="text-teal-600">
            support@flyanza.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
