import React, { useEffect, useState } from "react";
import { getSnippets } from "../api/Snippets/Snippets";
import { useFetch } from "../hooks/use-fetch";
import Snippet from "../components/Snippet/Snippet";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import DataBoundary from "../components/UI/DataBoundary/DataBoundary";
const HomePage = (props) => {
  const [snippets, setSnippets] = useState([]);
  const { sendRequest: fetchSnippets, loading, error } = useFetch();
  useEffect(() => {
    fetchSnippets(getSnippets, setSnippets);
  }, [fetchSnippets]);

  const outlet =
    loading && error ? (
      <p>...Loading</p>
    ) : (
      snippets.map((snippet) => <Snippet key={snippet.id} snippet={snippet} />)
    );

  return (
    <>
      <header>
        <h1 className="text-[#fff5f5] text-[1.5rem]">Errday Snippets</h1>
        <p className="text-[#fed7d7]">
          Create or Browse snippets you use or see everyday
        </p>
        <button>login</button>
      </header>
      <Wrapper>
        <DataBoundary loading={loading} data={snippets} error={error}>
          {outlet}
        </DataBoundary>
      </Wrapper>
    </>
  );
};

export default HomePage;
