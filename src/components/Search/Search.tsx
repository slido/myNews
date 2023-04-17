import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <div className="inputHolder">
      <form onSubmit={handleSearchClick}>
        <input
          type="text"
          placeholder="Search News"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
