import axios from "axios";
// import { API_URL } from "../config";

const instance = axios.create({
  baseURL: "http://localhost:8888",
  withCredentials: false,
});

export default instance;
