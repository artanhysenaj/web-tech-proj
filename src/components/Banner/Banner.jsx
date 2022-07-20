import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button/Button";
import { useAuthContext } from "../../store/AuthContext/AuthContext";
import Search from "../Search/Search";
import { useFetch } from "../../hooks/use-fetch";
import { getSearchSnippet } from "../../api/Snippets/Snippets";
import { useSnippetsContext } from "../../store/SnippetsContext/SnippetsContext";
import { useCallback } from "react";
const Banner = (props) => {
  const navigate = useNavigate();
  const { authenticated } = useAuthContext();
  const { setAllSnippets } = useSnippetsContext();

  const { sendRequest, loading } = useFetch();

  const handleSearch = useCallback(
    (searchValue) => {
      sendRequest(
        () => getSearchSnippet(searchValue),
        (data) => setAllSnippets(data)
      );
    },
    [sendRequest, setAllSnippets]
  );
  return (
    <header className="my-8 mx-2 sm:block flex flex-col items-center">
      <div className="flex justify-between ">
        <div>
          <h1 className="text-[#fff5f5] sm:text-[1.5rem]">Errday Snippets</h1>
          <p className="text-[#fed7d7] sm:text-base text-xs mb-2">
            Create or Browse snippets you use or see everyday
          </p>
        </div>
        <div className="self-end mb-2 mr-2 w-1/3 ">
          <Search onSearch={handleSearch} loading={loading} />
        </div>
      </div>
      {!authenticated && (
        <Button
          onClick={() => navigate("/login")}
          label="login"
          variant="outline"
        >
          <FontAwesomeIcon className="ml-2" icon={faSignInAlt} />
        </Button>
      )}
    </header>
  );
};

export default Banner;
