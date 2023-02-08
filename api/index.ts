import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { METHOD } from "../types/methods";
import { formatMultipleValueKeyQuery } from "../utils/utilityFunctions";

class Api {
  baseURL: string;
  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;
  }

  initializeInstance = () => {
    let baseURL = this.baseURL;
    console.log(baseURL);

    const instance = axios.create({
      baseURL,
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

  publicRequest = (url: string, method: string, data: any) => {
    const instance = this.initializeInstance();
    return instance({
      url,
      method,
      data,
    });
  };

  getCars = (model?: (string | number)[], make?: (string | number)[]) => {
    const url = `/v1/car?${
      model && model.length > 1
        ? formatMultipleValueKeyQuery("model", model)
        : model && `model=${model[0]}`
    }&${
      make && make.length > 1
        ? formatMultipleValueKeyQuery("make", make)
        : make && `make=${make[0]}`
    }`;
    console.log(url);

    return this.publicRequest(url, METHOD.GET, {});
  };

  getMakes = () => {
    const url = "/v1/car/makes";
    return this.publicRequest(url, METHOD.GET, {});
  };

  getModels = (makes: (string | number)[]) => {
    const url = `/v1/car/models?${
      makes.length > 1
        ? formatMultipleValueKeyQuery("make", makes)
        : `make=${makes[0]}`
    }`;
    return this.publicRequest(url, METHOD.GET, {});
  };
}

export default Api;
