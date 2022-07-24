import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Button from "../UI/Button/Button";
import { useAuthContext } from "../../store/AuthContext/AuthContext";
import Search from "../Search/Search";
import { useFetch } from "../../hooks/use-fetch";
import { getSearchSnippet, newSnippet } from "../../api/Snippets/Snippets";
import { useSnippetsContext } from "../../store/SnippetsContext/SnippetsContext";
import SnippetModal from "../Snippet/SnippetComponents/SnippetModal";

const Banner = (props) => {
  const { authenticated, user } = useAuthContext();
  const { snippets, setAllSnippets } = useSnippetsContext();
  const [showNewSnippetForm, setShowNewSnippetForm] = useState(false);

  const { sendRequest: searchRequest, loading: loadingSearch } = useFetch();
  const { sendRequest: newSnippetRequest, loading: loadingNewSnippet } =
    useFetch();

  const handleSearch = useCallback(
    (searchValue) => {
      searchRequest(
        () => getSearchSnippet(searchValue),
        (data) => setAllSnippets(data)
      );
    },
    [searchRequest, setAllSnippets]
  );

  const handleNewSnippet = (newSnippetData) => {
    newSnippetRequest(
      () =>
        newSnippet({
          ...newSnippetData,
          fields: {
            author: user.userId,
            language: newSnippetData.fields.language,
          },
          status: "publish",
        }),
      (data) => {
        setAllSnippets([data, ...snippets]);
        setShowNewSnippetForm(false);
        toast.success(data?.title?.rendered + " created successfully");
      }
    );
  };
  return (
    <>
      <SnippetModal
        show={showNewSnippetForm}
        onClose={() => setShowNewSnippetForm(false)}
        onSubmit={handleNewSnippet}
        loading={loadingNewSnippet}
      />
      <header className="my-8 mx-2 sm:block flex flex-col items-center">
        <div className="flex justify-between flex-col md:flex-row ">
          <div>
            <h1 className="text-[#fff5f5] sm:text-[1.5rem]">Errday Snippets</h1>
            <p className="text-[#fed7d7] sm:text-base text-xs mb-2">
              Create or Browse snippets you use or see everyday
            </p>
            {authenticated && (
              <Button
                onClick={() => setShowNewSnippetForm(true)}
                label="New Snippet"
                variant="outline"
              >
                <FontAwesomeIcon className="mr-2" icon={faPlus} />
              </Button>
            )}
          </div>
          <div className="self-end mb-2 md:mr-2 w-full md:w-1/3 ">
            <Search onSearch={handleSearch} loading={loadingSearch} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
