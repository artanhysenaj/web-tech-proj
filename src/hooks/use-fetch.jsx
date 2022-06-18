import { useState } from "react";
import { useCallback } from "react";
import { toast } from "react-toastify";
export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (fetchFunction, applyFunction) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchFunction();
        applyFunction && applyFunction(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.response.data || "Something went wrong");
        setLoading(false);
        toast.error(error.response.data.message || "Something went wrong");
      }
    },
    [setError, setLoading]
  );
  return { sendRequest, loading, error };
};
