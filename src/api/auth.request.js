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

export const registerCompanyRequest = async (company) => {
  axios.post("/auth/company/register",{
    method:"POST",
    body:JSON.stringify(company),
    headers:{
      'Content-Type':'application/json'}
      })
      .then((res) => {
        return res
      })
      .catch((err)=>{
        return err
      })
}

export const verifyTokenRequest = async () => axios.get("/auth/verify");