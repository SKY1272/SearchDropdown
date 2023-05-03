import React from "react";
import SearchableDropdown from "./components/SearchableDropdown";

const options = ["Apple", "Banana", "Cherry", "Durian", "Grapes"];

const App = () => {
  const handleSelect = (option) => {
    console.log("Selected option:", option);
    alert(option);
  };

  return (
    <div>
      <SearchableDropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App;
