import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    // Simulate a form submission (you can replace this with actual form submission logic)
    setTimeout(() => {
      setFormStatus(
        "Thank you for contacting us! We will get back to you shortly."
      );
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#1b1b1b] mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Have a question? Reach out to us and we'll get back to you as soon as
          possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 shadow-lg rounded-lg border border-gray-300"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-[#1b1b1b] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-xl font-semibold text-[#1b1b1b] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-xl font-semibold text-[#1b1b1b] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>

            {formStatus && (
              <div className="mt-4 text-center text-lg text-[#1b1b1b]">
                {formStatus}
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-300">
            <h2 className="text-3xl font-semibold text-[#1b1b1b] mb-4">
              Our Contact Information
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions, feel free to reach out to us using the
              contact form or through the details below:
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12V9l-3 3 3 3v-3h5V9h-5z"
                  />
                </svg>
                <span className="text-xl text-gray-700">
                  support@LMtore.com
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-xl text-gray-700">
                  123 Store San Carlos City
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-xl text-gray-700">+63 356 678 896</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
