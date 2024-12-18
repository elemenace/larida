import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      const lastSpaceIndex = text.substring(0, maxLength).lastIndexOf(" ");
      return (
        text.substring(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) +
        "..."
      );
    }
    return text;
  };

  if (loading) {
    return <div className="text-center text-2xl py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 bg-gray-50">
      <h1 className="text-center text-4xl font-extrabold mb-8 text-[#1b1b1b]">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <img
              className="h-56 w-full object-cover rounded-t-lg"
              src={product.image}
              alt={product.name}
            />
            <div className="mt-4">
              <div className="text-xl font-semibold text-[#1b1b1b]">
                {product.title}
              </div>
              <div className="text-lg font-semibold text-yellow-600 mt-2">
                ${product.price}
              </div>
              <div className="text-gray-600 text-sm mt-2">
                {truncateText(product.description, 100)}
              </div>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
