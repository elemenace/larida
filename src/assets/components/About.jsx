import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="py-5 bg-gray-100">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-[#1b1b1b]">
          About Us
        </h1>
        <p className="text-xl text-center mb-12 text-[#1b1b1b]">
          Welcome to Our Store, your ultimate destination for quality products
          and unbeatable deals. We are committed to providing you with the best
          shopping experience!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Existing 3 Cards */}
          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              Our Mission
            </h2>
            <p className="text-lg text-[#333]">
              Our mission is to provide our customers with top-notch products at
              affordable prices, along with exceptional service that exceeds
              expectations.
            </p>
          </div>

          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              What We Offer
            </h2>
            <p className="text-lg text-[#333]">
              We offer a wide variety of products ranging from tech gadgets,
              home essentials, fashion accessories, and more, carefully selected
              for the highest quality.
            </p>
          </div>

          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-5 text-lg text-[#333] space-y-2">
              <li>
                <strong>Quality:</strong> We stock high-quality products from
                trusted brands.
              </li>
              <li>
                <strong>Convenience:</strong> Shop from home and enjoy fast
                delivery.
              </li>
              <li>
                <strong>Customer-Centric:</strong> Our team is always available
                to assist you.
              </li>
              <li>
                <strong>Competitive Prices:</strong> Great deals on a wide range
                of products.
              </li>
            </ul>
          </div>

          {/* New 3 Cards */}
          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              Our Values
            </h2>
            <p className="text-lg text-[#333]">
              We believe in honesty, transparency, and integrity. Our goal is to
              create a lasting relationship with our customers based on trust
              and mutual respect.
            </p>
          </div>

          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              Customer Experience
            </h2>
            <p className="text-lg text-[#333]">
              Our customers are at the heart of everything we do. From easy
              browsing to fast delivery, we ensure a seamless experience from
              start to finish.
            </p>
          </div>

          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              Sustainability
            </h2>
            <p className="text-lg text-[#333]">
              We are committed to environmental responsibility. We strive to
              source sustainable products and packaging to minimize our impact
              on the planet.
            </p>
          </div>

          {/* Additional 3 Cards */}
          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              Partnerships
            </h2>
            <p className="text-lg text-[#333]">
              We collaborate with industry-leading brands to ensure that our
              customers receive the latest and most reliable products on the
              market.
            </p>
          </div>

          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              Innovation
            </h2>
            <p className="text-lg text-[#333]">
              We constantly innovate by embracing new technologies and improving
              our product offerings, ensuring we stay ahead in the market.
            </p>
          </div>

          <div className="card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#1b1b1b]">
              Community
            </h2>
            <p className="text-lg text-[#333]">
              We believe in giving back to the community. Through various
              initiatives, we support local causes and help those in need.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
