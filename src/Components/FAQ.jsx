import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I book a flight?",
      answer:
        "To book a flight, search for your preferred route and dates, select a flight, and complete the booking by providing passenger details and making payment."
    },
    {
      question: "Can I change or cancel my booking?",
      answer:
        "Yes, changes and cancellations depend on the airline's policies. Please check the terms associated with your ticket or contact customer support for assistance."
    },
    {
      question: "What documents do I need to travel?",
      answer:
        "You will need a valid government-issued ID or passport. For international flights, a visa may also be required based on your destination."
    },
    {
      question: "How do I know if my booking is confirmed?",
      answer:
        "Once your booking is confirmed, you will receive an email with the ticket details and confirmation number."
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, debit cards, and other online payment methods."
    }
  ];

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium bg-gray-100 hover:bg-gray-200"
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
