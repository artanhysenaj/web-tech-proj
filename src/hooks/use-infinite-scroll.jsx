import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { noDuplicates } from "../helpers/helperFunctions";

const url = process.env.REACT_APP_WP_REST_API_URL;
const useInfiniteScroll = ({ query, perPage, offset }) => {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    const fetchSnippets = async () => {
      try {
        const response = await axios.get(
          url + `/wp-json/wp/v2/${query}?per_page=${perPage}&offset=${offset}`,
          {
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
          }
        );

        setSnippets((prevState) => [
          ...prevState,
          ...noDuplicates(prevState, response.data),
        ]);
        setHasMore(response.data.length === perPage);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError(error.response.data.message);
        setLoading(false);
        toast.error(error.response.data.message);
      }
    };
    fetchSnippets();

    return () => cancel();
  }, [query, perPage, offset]);

  return { snippets, loading, error, hasMore };
};

export default useInfiniteScroll;
