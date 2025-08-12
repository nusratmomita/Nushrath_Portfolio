import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FiSend } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const ContactMe = () => {

  const [isSubmitted , setIsSubmitted] = useState(false);

  const handleContactForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "2efff433-c4bc-4ff9-b164-440b3481910d");

    setIsSubmitted(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Do you want to send the massage?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Send",
        denyButtonText: `Don't send`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Sent!", "", "success");
          e.target.reset();
          setIsSubmitted(false);
        } else if (result.isDenied) {
          Swal.fire("message are not sent", "", "info");
        }
      });
      // e.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({ 
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please send again.",

    });
    }
  };


  return (
    <motion.div  className='max-w-7xl mx-10 lg:mx-auto text-[#2C1250] space-y-5'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className='text-6xl font-extrabold text-[#D9D9D9] text-left'>Contact Me</h1>
      <div id="contactMe" className="max-w-7xl mx-auto p-10 bg-purple-50 rounded-3xl shadow-xl mt-10 flex flex-col md:flex-row gap-10 items-start">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-purple-800">📞 Contact Info</h2>
          <div className="text-3xl text-gray-700 space-y-3">
            <p><span className="font-semibold">Email:</span> nushrathhussain961@gmail</p>
            <p><span className="font-semibold">Mobile:</span> +880-1741-444-961</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-purple-700">Send a Message 💌</h2>
          <form onSubmit={handleContactForm} className="space-y-4">
            <div>
              <label className="text-xl block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="text-2xl w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="john deu"
              />
            </div>
            <div>
              <label className="text-xl block text-gray-700 font-medium mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="text-2xl w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xl block text-gray-700 font-medium mb-1">Your Message</label>
              <textarea
                required
                name="massage"
                className="text-2xl w-full px-4 py-2 border border-gray-300 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <input type="text" name="honeypot" style={{ display: 'none' }} />
            <button
              type="submit"
              className="flex justify-center items-center gap-2 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white w-full px-6 py-2 rounded-xl text-2xl font-semibold transition-all duration-300"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <svg className="animate-spin h-6 w-6 mr-2 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={25}/> Sent
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
