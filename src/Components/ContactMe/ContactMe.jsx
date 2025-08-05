import React from 'react';
import Swal from 'sweetalert2';

const ContactMe = () => {

  const [result, setResult] = React.useState("");

  const handleContactForm = async (e) => {
    e.preventDefault();

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2efff433-c4bc-4ff9-b164-440b3481910d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Do you want to send the massage?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Send",
        denyButtonText: `Don't send`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Sent!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div  className='mt-20 max-w-7xl mx-auto text-[#2C1250] space-y-5'>
      <h1 className='text-6xl font-extrabold text-[#D9D9D9] text-left'>Contact Me</h1>
      <div id="contactMe" className="max-w-7xl mx-auto p-10 bg-purple-50 rounded-3xl shadow-xl mt-10 flex flex-col md:flex-row gap-10 items-start">
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
            <button
              type="submit"
              className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white w-full px-6 py-2 rounded-xl font-semibold transition-all duration-300"
            >
              Send
            </button>
          </form>
          <span>{result}</span>
        </div>

      </div>
    </div>
  );
};

export default ContactMe;
