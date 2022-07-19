import axios from "axios";

export const apiRequest = async (method, url, input, params, options) => {
  if (
    method !== "GET" &&
    method !== "POST" &&
    method !== "PUT" &&
    method !== "PATCH" &&
    method !== "DELETE"
  )
    throw new Error(
      "Method not supported! \nMethod should be GET or POST or PUT or PATCH or DELETE "
    );

  const result = await axios.request({
    url: process.env.REACT_APP_WP_REST_API_URL + "/" + url,
    method,
    headers: options,
    data: input,
    params,
  });

  return result.data;
};
