import React from 'react';

const ContactMe = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 bg-purple-50 rounded-3xl shadow-xl mt-10 flex flex-col md:flex-row gap-10 items-start">
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-purple-800">📞 Contact Info</h2>
        <div className="text-2xl text-gray-700 space-y-3">
          <p><span className="font-semibold">Email:</span> nushrathhussain961@gmail</p>
          <p><span className="font-semibold">Mobile:</span> +880-1741-444-961</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-purple-700">Send a Message 💌</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Your Message</label>
            <textarea
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactMe;
