import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/use-fetch";
import Snippet from "../../Snippet/Snippet";
import DataBoundary from "../../UI/DataBoundary/DataBoundary";
import Spinner from "../../UI/Spinner/Spinner";
import { getMySnippet } from "../../../api/Snippets/Snippets";
import { useAuthContext } from "../../../store/AuthContext/AuthContext";
import { useSnippetsContext } from "../../../store/SnippetsContext/SnippetsContext";
const MySnippets = (props) => {
  const { language } = useParams();
  const { user } = useAuthContext();
  const { snippets, setAllSnippets } = useSnippetsContext();
  const { sendRequest, loading, error } = useFetch();
  useEffect(() => {
    if (!user) return;
    sendRequest(
      () => getMySnippet(user.userId),
      (data) => setAllSnippets(data)
    );
  }, [sendRequest, language, user, setAllSnippets]);

  const outlet = snippets.map((snippet) => {
    return <Snippet key={snippet.id} snippet={snippet} hasAuthorPermissions />;
  });

  if (loading) return <Spinner />;
  return (
    <DataBoundary data={snippets} error={error}>
      {outlet}
    </DataBoundary>
  );
};

export default MySnippets;
