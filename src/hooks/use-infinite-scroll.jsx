import { useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useSnippetsContext } from "../store/SnippetsContext/SnippetsContext";

const url = process.env.REACT_APP_WP_REST_API_URL;
const useInfiniteScroll = ({ query, perPage, offset }) => {
  const { addSnippet, setHasMore, hasMore } = useSnippetsContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useLayoutEffect(() => {
    if (!hasMore) {
      setLoading(false);
      return;
    }
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

        addSnippet(response.data);
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
  }, [query, perPage, offset, addSnippet, setHasMore, hasMore]);
  return { loading, error, hasMore };
};

export default useInfiniteScroll;
