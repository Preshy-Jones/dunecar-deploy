import Api from "../../api";
import { FilterOptionsInterface } from "../../types/car";

export const fetchMakes = async () => {
  const api = new Api();
  const response = await api.getMakes();
  console.log(response);

  return response.data;
};

export type MakeFilterPayload = {
  group_by: string;
  filters: FilterOptionsInterface;
};

const carService = {
  fetchMakes,
};

export default carService;
