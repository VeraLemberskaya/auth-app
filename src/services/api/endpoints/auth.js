import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("/api/v1/auth/email/register", data),
  login: (data) => axios.post("/api/v1/auth/email/login", data),
  forgotPassword: (data) => axios.post("/api/v1/auth/forgot/password", data),
  getProfile: () => axios.get("/api/v1/auth/me"),
  updateProfile: (data) => axios.patch("/api/v1/auth/me", data),
};

export default endpoints;
