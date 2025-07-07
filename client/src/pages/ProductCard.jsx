import { useState } from "react";
import { renderStars } from "../utils/renderStars";
import { useTranslation } from "react-i18next";

const colorMap = {
  yellow: "#E6CA97",
  white: "#D9D9D9",
  rose: "#E1A4A9",
};

const ProductCard = ({ product }) => {
  const [color, setColor] = useState("yellow");
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-white transition-shadow duration-300 p-12 w-full max-w-xs">
      <div className="w-full aspect-square overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.images[color]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>

      <h3 className="text-base font-montserratMedium mt-4 text-left text-black">
        {product.name}
      </h3>

      <p className="text-black font-montserratRegular text-sm text-left mt-2">
        {product.price}
      </p>

      <div className="flex justify-left gap-3 mt-4">
        {Object.keys(product.images).map((c) => (
          <div
            key={c}
            onClick={() => setColor(c)}
            className={`rounded-full p-[3px] transition-all duration-200 cursor-pointer ${
              color === c ? "border border-black" : "border border-transparent"
            }`}
          >
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: colorMap[c] }}
            />
          </div>
        ))}
      </div>

      <div className="text-left text-black text-sm font-avenirBook mt-3 capitalize">
        {t(color)} {t("gold")}
      </div>

      <div className="flex items-center justify-left gap-1 mt-2">
        <div className="flex">{renderStars(product.rating)}</div>
        <span className="text-sm text-black font-avenirBook ml-1">
          {product.rating}/5
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
