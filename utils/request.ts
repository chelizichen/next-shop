import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 50000,
});

export default request;
// request.
