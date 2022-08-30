import axios from "axios";

const iBudgetApi = axios.create({
  baseURL: "https://ibudget-kenzie.herokuapp.com/",
  timeout: 10000,
});

export default iBudgetApi;