import axios from "axios";

export const agentsApi = axios.create({
  baseURL: "https://valorant-api.com/v1",
});
