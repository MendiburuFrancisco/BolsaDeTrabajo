import axios from "./axios";
 
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
  const companyData = JSON.stringify(company);
  console.log(companyData)
  await axios.post("/auth/company/register", companyData,{
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


export const loginRequest = async (user) => axios.post("/auth/login", user);

export const verifyTokenRequest = async () => axios.get("/auth/verify");