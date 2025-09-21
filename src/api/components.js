import axios from "axios";

const API = axios.create({
  baseURL: "https://scuderia-backend.onrender.com/api"
});

export const getComponents = async () => {
  const res = await API.get("/components");
  return res.data;
};
