import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { CarPayload } from "../types/car";
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

  getCars = (query: CarPayload) => {
    let { models, makes, limit } = query;
    console.log(limit);

    const url = `/v1/car?${
      models
        ? models.length > 1
          ? formatMultipleValueKeyQuery("model", models)
          : `model=${models[0]}`
        : ""
    }&${
      makes
        ? makes.length > 1
          ? formatMultipleValueKeyQuery("make", makes)
          : `make=${makes[0]}`
        : ""
    }${limit ? `&limit=${limit}` : ""}
    `;
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
