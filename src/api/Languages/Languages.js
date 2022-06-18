import axios from "axios";

const url = process.env.REACT_APP_WP_REST_API_URL;

export const getLanguage = async (id) => {
  return await axios.get(url + "/wp-json/wp/v2/languages/" + id);
};
