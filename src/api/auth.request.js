import axios from "./axios";
// import { fetchData } from "./fetchData";

 
export const registerRequest = async (user) => {
  axios.post("/auth/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export const loginRequest = async (user) => {
  const authData = JSON.stringify(user);
  const response = await axios.post("/auth/login",  authData,
    {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export const verifyTokenRequest = async () => axios.get("/auth/verify");