import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { BodyTypesPayload, CarPayload } from "../types/car";
import { METHOD } from "../types/methods";
import { formatMultipleValueKeyQuery } from "../utils/utilityFunctions";
import { MakeFilterPayload } from "../features/make/makeService";

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

  getCar = (id: string) => {
    const url = `/v1/cars/car/${id}`;
    return this.publicRequest(url, METHOD.GET, {});
  };

  getCars = (payload: CarPayload) => {
    const url = "/v1/cars/filter";
    return this.publicRequest(url, METHOD.POST, payload);
  };

  getMakes = () => {
    const url = "/v1/make";
    return this.publicRequest(url, METHOD.GET, {});
  };
  getFilterOptions = (payload: MakeFilterPayload) => {
    const url = "/v1/cars/filter/options";
    return this.publicRequest(url, METHOD.POST, payload);
  };

  getModels = (makes: string[]) => {
    const url = `/v1/model?${
      makes.length > 1
        ? formatMultipleValueKeyQuery("make", makes)
        : `make=${makes[0]}`
    }`;
    return this.publicRequest(url, METHOD.GET, {});
  };

  getFilteredModelsByMake = ({
    make,
    models,
  }: {
    make: string;
    models: string[];
  }) => {
    const url = `/v1/car/models/filter`;
    return this.publicRequest(url, METHOD.POST, {
      make,
      models,
    });
  };

  getBodyTypes = (query: BodyTypesPayload) => {
    let { makes } = query;

    const url = `/v1/body_type?${
      makes && makes.length > 0
        ? makes.length > 1
          ? formatMultipleValueKeyQuery("make", makes)
          : `make=${makes[0]}`
        : ""
    }`;
    return this.publicRequest(url, METHOD.GET, {});
  };

  getFeatures() {
    const url = "/v1/features";
    return this.publicRequest(url, METHOD.GET, {});
  }
}

export default Api;
