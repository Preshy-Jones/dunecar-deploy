import Api from "../../api";
import { DeleteModelsofMakePayload } from "./modelSlice";

export const fetchModels = async (makes: string[]) => {
  const api = new Api();
  const response = await api.getModels(makes);
  console.log(response);

  return response.data;
};

export const deleteModelsofMakehandler = async (
  payload: DeleteModelsofMakePayload
) => {
  const api = new Api();
  const response = await api.getFilteredModelsByMake(payload);
  console.log(response);
  return response.data;
};

const carService = {
  fetchModels,
  deleteModelsofMakehandler,
};

export default carService;
