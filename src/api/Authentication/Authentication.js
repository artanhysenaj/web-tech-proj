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
  return await axios.post(
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
};

export const register = async (
  firstName,
  lastName,
  username,
  email,
  password
) => {
  return await axios.post(url + "/wp-json/wp/v2/users", {
    first_name: firstName,
    last_name: lastName,
    username: username,
    email: email,
    password: password,
  });
};

export const updateUser = async (token, username, password) => {};
export const changePassword = async (token, oldPassword, newPassword) => {};

export const forgotPassword = {
  sendEmail: async (email) => {
    return await axios.post(url + "/wp-json/bdpwr/v1/reset-password", {
      email,
    });
  },
  validateCode: async (email, code) => {
    return await axios.post(url + "/wp-json/bdpwr/v1/validate-code", {
      email: email,
      code: code,
    });
  },
  resetPassword: async (email, code, password) => {
    return await axios.post(url + "/wp-json/bdpwr/v1/reset-password", {
      email: email,
      code: code,
      password: password,
    });
  },
};
