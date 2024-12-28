import React, { useState } from "react";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Add the Web3Forms access key
    formData.append("access_key", "c090967e-ef05-4aab-b96f-c61660cdb371");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent Successfully");
        event.target.reset(); // Clear the form
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6  space-y-6">
      <h1 className="text-2xl font-bold text-teal-800 text-center mb-6">
        Contact Us
      </h1>
      <form onSubmit={onSubmit} className="space-y-4 ">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-teal-800"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-teal-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-teal-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            rows="4"
            required
          />
        </div>
        <div className="flex justify-center">
        <button
          type="submit"
          className=" w-44 p-3 bg-teal-800 text-white font-medium rounded-3xl hover:bg-teal-400"
        >
          Send
        </button>
        </div>
      </form>
      {result && (
        <p className="mt-4 text-center text-teal-800 font-medium">{result}</p>
      )}
    </div>
  );
};

export default ContactUs;
