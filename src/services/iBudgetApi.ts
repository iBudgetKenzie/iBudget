import axios from "axios";

const iBudgetApi = axios.create({
  baseURL: "https://api-ibudget.herokuapp.com/",
  timeout: 10000,
});

export default iBudgetApi;