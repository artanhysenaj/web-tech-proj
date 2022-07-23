import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import Snippet from "../../components/Snippet/Snippet";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import DataBoundary from "../../components/UI/DataBoundary/DataBoundary";
import Spinner from "../../components/UI/Spinner/Spinner";
import { getAllSnippets } from "../../api/Snippets/Snippets";
const LanguagePage = (props) => {
  const { language } = useParams();
  const { sendRequest, loading, error } = useFetch();
  const [snippets, setSnippets] = useState([]);
  useEffect(() => {
    sendRequest(
      () => getAllSnippets(),
      (data) => {
        const res = data.filter((snippet) => snippet.acf.language === language);
        setSnippets(res);
      }
    );
  }, [sendRequest, language]);

  const outlet = snippets.map((snippet) => {
    return <Snippet key={snippet.id} snippet={snippet} />;
  });

  if (loading) return <Spinner />;
  return (
    <Wrapper>
      <DataBoundary data={snippets} error={error}>
        {outlet}
      </DataBoundary>
    </Wrapper>
  );
};

export default LanguagePage;
