import React from "react";
import StarIcon from "@mui/icons-material/Star";
export function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <StarIcon
          key={i}
          className="w-4 h-4 text-starIconColor  fill-starIconColor transition-all duration-200 hover:scale-110"
        />
      );
    } else if (i === fullStars + 1 && decimal >= 0.25 && decimal < 0.75) {
      stars.push(
        <div key={i} className="relative">
          <StarIcon className="w-4 h-4 text-gray-300 fill-gray-300 mb-2" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "inset(0 50% 0 0)", marginTop: "-2px" }}
          >
            <StarIcon className="w-4 h-4 text-starIconColor  fill-starIconColor  " />
          </div>
        </div>
      );
    } else if (i === fullStars + 1 && decimal >= 0.75) {
      stars.push(
        <StarIcon
          key={i}
          className="w-4 h-4 text-starIconColor fill-starIconColor transition-all duration-200 hover:scale-110"
        />
      );
    } else {
      stars.push(
        <StarIcon
          key={i}
          className="w-4 h-4 text-gray-300 fill-gray-300 transition-all duration-200 hover:scale-110"
        />
      );
    }
  }

  return stars;
}
