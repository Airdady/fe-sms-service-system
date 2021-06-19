import axios from "axios";

// add base URL here
const instance = axios.create({
  baseURL: `https://api.airdady.com`,
  timeout: 10000,
  headers: {
    Authorization: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).token,
  },
});

export default instance;

