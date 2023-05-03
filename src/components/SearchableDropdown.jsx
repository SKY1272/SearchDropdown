import React, { useState } from "react";
import "./Search.css";
const SearchableDropdown = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setSearchTerm("");
    setIsOpen(false);
    onSelect(option);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="searchable-dropdown">
      <h1>Searchable Dropdown</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        onFocus={toggleDropdown}
        onBlur={toggleDropdown}
      />
      {isOpen && (
        <ul>
          {filteredOptions.map((option) => (
            <li key={option} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      <h1>{selectedOption}</h1>
    </div>
  );
};

export default SearchableDropdown;
