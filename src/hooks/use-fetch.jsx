import { useState } from "react";
import { useCallback } from "react";
export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (fetchFunction, applyFunction) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchFunction();
      applyFunction(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error || "Something went wrong");
      setLoading(false);
    }
  }, []);
  return { sendRequest, loading, error };
};
