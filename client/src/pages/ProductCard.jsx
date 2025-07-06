import { useState } from "react";

const colorMap = {
  yellow: "#E6CA97",
  white: "#D9D9D9",
  rose: "#E1A4A9",
};

const ProductCard = ({ product }) => {
  const [color, setColor] = useState("yellow");

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-xs mx-auto border border-gray-100">
      <div className="w-full aspect-square overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.images[color]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>

      <h3 className="text-lg font-semibold mt-4 text-center text-gray-800">
        {product.name}
      </h3>

      <p className="text-red-600 font-semibold text-base text-center mt-2">
        {product.price}
      </p>

      <div className="flex justify-center gap-3 mt-4">
        {Object.keys(product.images).map((c) => (
          <button
            key={c}
            title={c}
            className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
              color === c ? "border-black border-2" : "border-gray-300"
            }`}
            style={{ backgroundColor: colorMap[c] }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>

      <div className="text-center text-gray-500 text-sm mt-3 capitalize">
        {color} gold
      </div>

      <div className="flex items-center justify-center gap-1 mt-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-sm ${
                star <= Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ⭐
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
      </div>
    </div>
  );
};

export default ProductCard;
