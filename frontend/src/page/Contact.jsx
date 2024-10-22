import React from "react";

const Contact = () => {
  return (
    <div className="md:mx-auto max-w-6xl mt-56 md:mt-24 mx-2">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">
        We’d love to hear from you! Whether you have questions, feedback, or
        want to learn more about our services, feel free to reach out.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-2">
          <strong>Email:</strong> serenity@yogacenter.com
        </p>
        <p className="text-lg mb-2">
          <strong>Phone:</strong> 9895176437
        </p>
        <p className="text-lg mb-2">
          <strong>Address:</strong> Onamvelil, Thuravoor P.O, Cherthala, India
        </p>
      </div>

      <form className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
