import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8089/feedback", 
});

export default api;
