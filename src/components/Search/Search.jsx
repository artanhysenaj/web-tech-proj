import { useRef, useState } from "react";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useSnippetsContext } from "../../store/SnippetsContext/SnippetsContext";
const Search = ({ onSearch, loading }) => {
  const { allowInfiniteScroll } = useSnippetsContext();
  const [searchValue, setSearchValue] = useState("");
  const [showFullInput, setShowFullInput] = useState(false);
  const searchInputRef = useRef(null);

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
    if (showFullInput) {
      setSearchValue("");
      setShowFullInput(false);
      allowInfiniteScroll(true);
      return;
    }
    setShowFullInput(true);
    searchInputRef.current.focus();
  };

  const handleOnBlur = () => {
    if (searchValue.trim().length !== 0) return;
    setShowFullInput(false);
    allowInfiniteScroll(true);
  };

  return (
    <div
      className={`relative z-10 mt-2 ${
        showFullInput ? "w-full" : "w-10"
      } transition-all duration-200 ease-in-out md:w-full`}
    >
      <input
        ref={searchInputRef}
        className={`
        ${
          showFullInput
            ? "w-full pb-0 p-2"
            : "w-0 pb-2 md:translate-x-[17.5rem]"
        }
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
          icon={showFullInput ? faX : faSearch}
          className={`md:text-2xl text-xl ${
            loading && showFullInput ? "animate-spin" : ""
          } m-auto hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out`}
        />
      </button>
    </div>
  );
};

export default Search;
