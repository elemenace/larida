import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Home = () => {
  const navigate = useNavigate(); // Create the navigate function

  const handleBrowseClick = () => {
    navigate("/products"); // Navigate to the Products page
  };

  return (
    <div>
      <section className="homepage relative h-screen w-full bg-cover bg-center bg-[url('homebg2.jpg')] backdrop-blur-lg">
        <div className="absolute inset-0 bg-black opacity-20 backdrop-blur-lg"></div>
        <div className="content flex flex-col items-center justify-center h-4/5 z-10">
          <div className="text mb-12 text-center text-white text-lg text-shadow-md">
            <h1 className="text-5xl font-extrabold mb-2 text-white">
              Welcome to Our Store
            </h1>
            <p className="text-white">
              Shop the latest products and enjoy amazing deals. From gadgets to
              accessories, we have everything you need.
            </p>
          </div>
          {/* Updated button with higher z-index */}
          <a
            onClick={handleBrowseClick}
            className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-lg lg:mt-8 hover:bg-yellow-400 focus:bg-yellow-400 cursor-pointer z-20"
            role="button"
            title="Browse Products"
          >
            Browse Products
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
