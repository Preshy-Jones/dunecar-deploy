import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const client = () => {
  const instance = axios.create({
    baseURL: "https://carzooo.herokuapp.com",
    withCredentials: false,
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    // },
  });

  instance.interceptors.request.use(
    (config: any) => {
      return config;
    },
    (error: any) => {
      console.log(error);

      return Promise.reject(error);
    }
  );

  return instance;
};

export default client;
