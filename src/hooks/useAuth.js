import { fetchData } from "./fetchData.js";

const url_auth = "/auth/login";

function useAuth() {
  const login = async (credentials) => {
    try {
      const response = fetchData(url_auth, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.read();
      if (data.token) {
        localStorage.setItem("token", data.token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      // Handle the error here
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetchData(url_auth, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Handle the response here
    } catch (error) {
      // Handle the error here
    }
  };

  return { login, register };
}

export default useAuth;
