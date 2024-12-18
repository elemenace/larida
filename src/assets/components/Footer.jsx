import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row justify-between">
          <div>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i>{" "}
                {/* Replace with actual icon if using FontAwesome */}
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>{" "}
                {/* Replace with actual icon if using FontAwesome */}
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>{" "}
                {/* Replace with actual icon if using FontAwesome */}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 pb-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} LM Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
