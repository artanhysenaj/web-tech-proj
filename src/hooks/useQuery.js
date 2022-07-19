import { useState, useEffect } from "react";

export default function useQuery(dataFetchingFn, options = { enabled: true }) {
  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: undefined,
  });

  useEffect(() => {
    if (!options.enabled) return;

    fetchData();
  }, []);

  async function fetchData() {
    try {
      const results = await dataFetchingFn();

      setState((prevState) => ({
        ...prevState,
        error: undefined,
        data: results,
      }));
    } catch (error) {
      console.error(error.message);

      setState((prevState) => ({ ...prevState, error: error.message }));
    } finally {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }

  return {
    ...state,
    refetch: fetchData,
  };
}
