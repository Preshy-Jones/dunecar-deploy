import Api from "../../api";

export const fetchFeatures = async () => {
  const api = new Api();
  const response = await api.getFeatures();
  return response.data;
};

const searchService = {
  fetchFeatures,
};

export default searchService;
