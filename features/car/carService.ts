import Api from "../../api";
import client from "../../api/client";
import { ENDPOINTS } from "../../utils/constants";

export const fetchCars = async (models?: (string | number)[], makes?: (string | number)[]) => {
  const api = new Api();
  const response = await api.getCars(models, makes);
  console.log(response);

  return response.data;
};

export const fetchMakes = async () => {
  const api = new Api();
  const response = await api.getMakes();
  console.log(response);

  return response.data;
};

export const fetchModels = async (makes: (string | number)[]) => {
  const api = new Api();
  const response = await api.getModels(makes);
  console.log(response);

  return response.data;
};

const carService = {
  fetchCars,
  fetchModels,
  fetchMakes,
};

export default carService;
