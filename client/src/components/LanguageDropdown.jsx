import { useState } from "react";

const LanguageDropdown = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false);

  const options = [
    { value: "en", label: "English" },
    { value: "tr", label: "Turkish" },
  ];

  const selectedOption =
    options.find((o) => o.value === lang)?.label || "Select";

  const handleSelect = (value) => {
    setLang(value);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex justify-between w-32 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
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
        <ul className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
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

export default LanguageDropdown;
