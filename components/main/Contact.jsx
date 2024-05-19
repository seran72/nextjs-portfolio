import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-10">
      {/* Image Section */}
      <div className="flex-1 mb-10 md:mb-0">
        <Image
          src="/path/to/your/image.jpg"
          alt="Contact Image"
          className="rounded-lg shadow-lg"
          width={600} // specify the width
          height={800} // specify the height
          objectFit="cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-[030014] p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
        <form action="https://formspree.io/f/yourFormID" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
