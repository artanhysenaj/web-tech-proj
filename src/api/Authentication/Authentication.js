import axios from "axios";

const url = process.env.REACT_APP_WP_REST_API_URL;

export const validateToken = async (username, password) => {
  const response = await axios.post(
    url + "/wp-json/jwt-auth/v1/token/validate"
  );
  return response.data;
};
export const getUser = async (token) => {};
export const login = async (username, password) => {
  const response = await axios.post(
    url + "/wp-json/jwt-auth/v1/token",
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
export const logout = async (token) => {};
export const register = async (username, password) => {};
export const updateUser = async (token, username, password) => {};
export const forgotPassword = async (token) => {};
export const changePassword = async (token, oldPassword, newPassword) => {};
