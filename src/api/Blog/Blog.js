import { apiRequest } from "../api";

export const getBlogPosts = () => apiRequest("GET", "wp-json/wp/v2/posts");

export const getBlog = (id) => apiRequest("GET", `wp-json/wp/v2/posts/${id}`);
