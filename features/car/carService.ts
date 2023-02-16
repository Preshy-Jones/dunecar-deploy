import Api from "../../api";

export const fetchCars = async (models?: string[], makes?: string[]) => {
  const api = new Api();
  const response = await api.getCars({ models, makes });
  // console.log(response);

  return response.data;
};

const carService = {
  fetchCars,
};

export default carService;
