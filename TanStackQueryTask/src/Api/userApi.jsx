import React from "react";
import axios from "axios";

//All User Are Displayed
// export const getUsers = async () => {
//   const response = await axios.get(
//     "https://dummyjson.com/users"
//   );

//   return response.data.users;
// };

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getUsers = async (page) => {
  const limit = 10;
  const skip = (page - 1) * limit;

  const response = await api.get(`/users?limit=${limit}&skip=${skip}`);

  return response.data;
};

export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);

  return response.data;
};

export const getUserPosts = async (id) => {
  const response = await api.get(`/users/${id}/posts`);
  console.log(response.data.posts);
  return response.data.posts;
};
// export default getUserById;
