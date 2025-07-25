import { useState } from "react";
import { useTranslation } from "react-i18next";

const SortDropdown = ({ sort, setSort }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const options = [
    { value: "", label: t("defaultSort") },
    { value: "price_asc", label: t("priceAsc") },
    { value: "price_desc", label: t("priceDesc") },
    { value: "rating_asc", label: t("ratingAsc") },
    { value: "rating_desc", label: t("ratingDesc") },
  ];

  const handleSelect = (value) => {
    setSort(value);
    setOpen(false);
  };

  const selectedOption =
    options.find((o) => o.value === sort)?.label || options[0].label;

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex justify-between w-56 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {selectedOption}
          <svg
            className={`ml-2 h-5 w-5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414 4.707 10.707A1 1 0 013.293 9.293l6-6A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {open && (
        <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
