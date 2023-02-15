import Api from "../../api";

export const fetchModels = async (makes: (string | number)[]) => {
  const api = new Api();
  const response = await api.getModels(makes);
  console.log(response);

  return response.data;
};

const carService = {
  fetchModels,
};

export default carService;
