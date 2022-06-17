import React, { useEffect, useState } from "react";
import { getSnippets } from "../api/Snippets/Snippets";
import { useFetch } from "../hooks/use-fetch";
import Snippet from "../components/Snippet/Snippet";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import DataBoundary from "../components/UI/DataBoundary/DataBoundary";
import { toast } from "react-toastify";
const HomePage = (props) => {
  const [snippets, setSnippets] = useState([]);
  const { sendRequest: fetchSnippets, loading, error } = useFetch();
  useEffect(() => {
    fetchSnippets(getSnippets, setSnippets);
  }, [fetchSnippets]);

  const outlet = snippets.map((snippet) => (
    <Snippet key={snippet.id} snippet={snippet} />
  ));

  return (
    <>
      <header className="my-8 mx-2">
        <h1 className="text-[#fff5f5] text-[1.5rem]">Errday Snippets</h1>
        <p className="text-[#fed7d7]">
          Create or Browse snippets you use or see everyday
        </p>
        <button
          onClick={() =>
            toast.warning("Hello", {
              customId: "myToast",
            })
          }
        >
          login
        </button>
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
