import axios from "axios";
// import { API_URL } from "../config";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
});

export default instance;
