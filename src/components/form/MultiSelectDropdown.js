import React, { useState } from "react";

const options = ["One", "Two", "Three", "Four", "Five"];

const MultiSelectDropdown = ({placeholder, options}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    setSelectedOptions((currentSelectedOptions) =>
      currentSelectedOptions.includes(option)
        ? currentSelectedOptions.filter((opt) => opt !== option)
        : [...currentSelectedOptions, option]
    );
  };

  const toggleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
  };

  const isSelected = (option) => selectedOptions.includes(option);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-64 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOptions.length === 0
            ? placeholder
            : selectedOptions.join(", ")}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedOptions.length === options.length}
                  onChange={toggleSelectAll}
                />
                <span className="ml-2">Select all</span>
              </label>
            </div>
            {options.map((option) => (
              <div key={option} className="px-4 py-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={isSelected(option)}
                    onChange={() => toggleOption(option)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
