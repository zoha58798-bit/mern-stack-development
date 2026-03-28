import { useState } from "react";

export default function ProductCard({ image, title, description, price }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-72 bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Product Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Price + Quantity */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-2xl font-bold text-purple-600">{price}$</span>

            <div className="flex items-center gap-3">
              <button
                onClick={decrement}
                className="w-8 h-8 rounded-full bg-purple-600 text-white text-xl font-bold flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                −
              </button>
              <span className="text-base font-semibold text-gray-800 w-5 text-center">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="w-8 h-8 rounded-full bg-purple-600 text-white text-xl font-bold flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3 rounded-full border-2 border-purple-600 text-sm font-semibold transition-all duration-200
                ${added
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600 hover:bg-purple-50"
                }`}
            >
              {added ? "Added ✓" : "Add to cart"}
            </button>

            <button className="flex-1 py-3 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors">
              Buy now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}