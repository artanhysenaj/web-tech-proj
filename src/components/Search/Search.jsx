import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useSnippetsContext } from "../../store/SnippetsContext/SnippetsContext";
const Search = ({ onSearch, loading }) => {
  const { allowInfiniteScroll } = useSnippetsContext();
  const [searchValue, setSearchValue] = useState("");
  const [showFullInput, setShowFullInput] = useState(false);

  useEffect(() => {
    if (searchValue.trim().length === 0) return;
    const timer = setTimeout(() => {
      onSearch(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [onSearch, searchValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") allowInfiniteScroll(true);
  };

  const handleButtonClick = () => {
    if (!showFullInput) {
      setShowFullInput(true);
      return;
    }
    onSearch(searchValue);
  };

  const handleOnBlur = () => {
    if (searchValue.trim().length !== 0) return;
    setShowFullInput(false);
  };

  return (
    <div className="relative ">
      <input
        className={`
        ${showFullInput ? "w-full pb-0 p-2" : "w-0 pb-2"}
        bg-transparent border-b-2 focus:outline-none autofill:bg-transparent transition-all duration-200 ease-in-out
        placeholder-gray-300`}
        type="text"
        id="searchBar"
        name="search"
        placeholder="Looking for a snippet..."
        autoComplete="off"
        value={searchValue}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <button
        type="button"
        className="absolute right-0 my-auto w-10 h-full"
        onClick={handleButtonClick}
      >
        <FontAwesomeIcon
          icon={faSearch}
          className={`text-2xl ${
            loading ? "animate-spin" : ""
          } m-auto hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out`}
        />
      </button>
    </div>
  );
};

export default Search;
