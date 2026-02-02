import React from "react";

const RefundAndCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Cancellation Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cancellation Requests</h2>
        <p className="text-gray-700 leading-relaxed">
          Passengers can cancel their flight bookings through our website or customer service.
          Cancellation requests should be made in accordance with the airline's policies and within
          the permissible time frame.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cancellation Charges</h2>
        <p className="text-gray-700 leading-relaxed">
          The cancellation charges vary depending on the airline, fare type, and the time of cancellation.
          Generally, cancellations made within 24 hours of booking may incur lower charges, while
          cancellations closer to the departure date may attract higher fees.
        </p>
      </section>

      <h1 className="text-3xl font-bold mb-6 mt-10">Refund Process</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Refund Eligibility</h2>
        <p className="text-gray-700 leading-relaxed">
          Refunds are processed based on the airline's cancellation policies and fare rules.
          Non-refundable tickets may not be eligible for a refund.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Refund Timeframe</h2>
        <p className="text-gray-700 leading-relaxed">
          Once a cancellation request is approved and processed, the refund will be initiated within
          3 to 7 working days. The timeframe may vary based on the airline and the payment method used.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Deductions</h2>
        <p className="text-gray-700 leading-relaxed">
          Service charges, convenience fees, and any applicable cancellation fees will be deducted
          from the refund amount.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Special Conditions</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">
            <strong>No-Show Policy:</strong> If a passenger fails to board the flight without prior
            cancellation, the ticket may be considered non-refundable.
          </li>
          <li>
            <strong>Flight Rescheduling:</strong> If you wish to reschedule your flight, please check
            the airline's rescheduling policies as changes may incur additional charges.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RefundAndCancellation;
