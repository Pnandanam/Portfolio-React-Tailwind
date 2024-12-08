import React from "react";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-screen-lg w-full">
        {/* Section Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-lg">
            Feel free to get in touch using the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center justify-center">
          <form
            action="https://getform.io/f/awnnknkb"
            method="POST"
            className="flex flex-col w-full sm:w-3/4 lg:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>
            <button className="text-white bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
