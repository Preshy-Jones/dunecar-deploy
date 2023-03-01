import Api from "../../api";
import { BodyTypesPayload } from "../../types/car";

export const fetchBodyTypes = async (payload: BodyTypesPayload) => {
  const api = new Api();
  const response = await api.getBodyTypes(payload);
  console.log(response);

  return response.data;
};

const carService = {
  fetchBodyTypes,
};

export default carService;
