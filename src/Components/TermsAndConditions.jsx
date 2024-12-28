import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. General Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          By using this website to book flights, you agree to comply with and be
          bound by these terms and conditions. Please read them carefully
          before proceeding.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Booking Policy</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>All bookings are subject to availability and confirmation.</li>
          <li>
            You must ensure the accuracy of all personal and payment
            information provided.
          </li>
          <li>
            Tickets are non-transferable and can only be used by the person(s)
            named during booking.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Payment Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          Full payment must be made at the time of booking. Failure to provide
          payment will result in the cancellation of your reservation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cancellation and Refund Policy</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Cancellation requests must be submitted at least 48 hours prior to departure.</li>
          <li>Refunds are processed in accordance with the airline's refund policy.</li>
          <li>Service fees may apply for processing cancellations and refunds.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Changes to Flights</h2>
        <p className="text-gray-700 leading-relaxed">
          Changes to your flight itinerary are subject to airline policies and
          may incur additional fees.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Liability</h2>
        <p className="text-gray-700 leading-relaxed">
          We act as an intermediary between customers and airlines. We are not
          liable for any delays, cancellations, or other issues beyond our
          control.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We are committed to protecting your privacy. Please refer to our
          Privacy Policy for details on how we collect, use, and safeguard your
          information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about these terms and conditions, please
          contact us at <a href="mailto:support@flightbook.com" className="text-teal-600">support@flightbook.com</a>.
        </p>
      </section>

      <p className="text-sm text-gray-500">
        Last updated: [Insert Date Here]
      </p>
    </div>
  );
};

export default TermsAndConditions;
