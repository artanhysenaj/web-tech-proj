import { useContext, createContext } from "react";

export const SnippetsContext = createContext({
  snippets: [],
  addSnippet: (snippet) => {},
  deleteSnippet: (id) => {},
  updateSnippet: (id, snippet) => {},
  
});

export const useSnippetsContext = () => useContext(SnippetsContext);
