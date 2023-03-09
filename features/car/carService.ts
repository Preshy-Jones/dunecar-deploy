import Api from "../../api";
import { CarPayload } from "../../types/car";

export const fetchCars = async (payload: CarPayload) => {
  const { models, makes, limit, body_types } = payload;
  const api = new Api();
  const response = await api.getCars({ models, makes, body_types, limit });
  // console.log(response);

  return response.data;
};

export const fetchCar = async (id: string) => {
  const api = new Api();
  const response = await api.getCar(id);
  // console.log(response);
  return response.data;
};

const carService = {
  fetchCars,
  fetchCar,
};

export default carService;
