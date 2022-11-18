import api from "../services/api";

const authService = {
  async authenticate({ email, password }) {
    localStorage.clear();
    const params = { email, password };
    return api.post("user/login", params);
  },

  setLoggedUser(token) {
    const logged = JSON.stringify(token);
    localStorage.setItem("token", logged);
  },

  getLoggedUser() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const tokenJwt = JSON.stringify(token);
      return tokenJwt;
    } catch (error) {
      return null;
    }
  },
};

export default authService;