//copied
import axios from "axios";
import { REACT_API } from "../../constants";

const $host = axios.create({
  baseURL: REACT_API,
});

const $authHost = axios.create({
  baseURL: REACT_API,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };