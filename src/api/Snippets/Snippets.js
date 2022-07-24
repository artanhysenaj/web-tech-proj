import axios from "axios";

const url = process.env.REACT_APP_WP_REST_API_URL;

export const deleteSnippet = async (id) => {
  return await axios.delete(url + "/wp-json/wp/v2/snippets/" + id);
};

export const editSnippet = async (id, data) => {
  return await axios.post(url + "/wp-json/wp/v2/snippets/" + id, data);
};

export const newSnippet = async (data) => {
  return await axios.post(url + "/wp-json/wp/v2/snippets", data);
};

export const getSearchSnippet = async (keyword) => {
  return await axios.get(url + "/wp-json/wp/v2/snippets?search=" + keyword);
};

export const getAllSnippets = async () => {
  return await axios.get(url + "/wp-json/wp/v2/snippets?per_page=100");
};

export const getMySnippet = async (userID) => {
  return await axios.get(
    url + "/wp-json/wp/v2/snippets?author=" + userID + "&per_page=100"
  );
};
