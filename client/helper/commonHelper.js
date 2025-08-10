import axios from "axios";
const asyncHandler = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow the error if needed
    }
  };
};
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  // console.log(document.cookie)
  const parts = value.split(`; ${name}=`);
  // console.log(parts)
  if (parts.length === 2) return parts.pop().split(";").shift();
};

const handleRequest = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return { data: response.data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error.response?.data?.message || error.message || "Request failed",
    };
  }
};
const base_url = "http://localhost:3000/api"

export const apiClient = {
  get: async (url, headers = {}) =>
    handleRequest(() =>
      axios.get(`${base_url}${url}`, {
        ...headers,
        withCredentials: true
      })
    ),

  post: async (url, data, headers = {}) => {
    if (data instanceof FormData) {
      delete headers["Content-Type"];
    } else if (!headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }

    return handleRequest(() =>
      axios.post(`${base_url}${url}`, data, {
        ...headers,
        withCredentials: true
      })
    );
  },

  delete: async (url, headers = {}) =>
    handleRequest(() =>
      axios.delete(`${base_url}${url}`, {
        ...headers,
        withCredentials: true
      })
    )
};


export { asyncHandler, getCookie };
