import { useCallback } from "react";
import { useState } from "react";
import { noDuplicates } from "../../helpers/helperFunctions";
import { SnippetsContext } from "./SnippetsContext";
const SnippetsContextProvider = (props) => {
  const [snippets, setSnippets] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const allowInfiniteScrollHandler = (value) => setHasMore(value);

  const setAllSnippets = useCallback((snippets) => {
    setSnippets(snippets);
    allowInfiniteScrollHandler(false);
  }, []);

  const addSnippet = useCallback((newSnippets) => {
    setSnippets((prevState) => [
      ...prevState,
      ...noDuplicates(prevState, newSnippets),
    ]);
  }, []);
  const deleteSnippet = (id) => {
    setSnippets((prevState) =>
      prevState.filter((snippet) => snippet.id !== id)
    );
  };
  const updateSnippet = (id, snippet) => {};
  const value = {
    snippets,
    hasMore,
    setAllSnippets,
    addSnippet,
    deleteSnippet,
    updateSnippet,
    setHasMore,
    allowInfiniteScroll: allowInfiniteScrollHandler,
  };
  return (
    <SnippetsContext.Provider value={value}>
      {props.children}
    </SnippetsContext.Provider>
  );
};

export default SnippetsContextProvider;
