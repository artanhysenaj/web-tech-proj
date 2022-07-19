import { apiRequest } from "../api";

export const getAllRoutes = () => apiRequest("GET", "wp-json");
