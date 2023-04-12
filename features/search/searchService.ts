import Api from "../../api";
import { FilterPayload } from "../../types/car";

export const fetchFeatures = async () => {
  const api = new Api();
  const response = await api.getFeatures();
  return response.data;
};

export const fetchFiltersOptions = async (payload: FilterPayload) => {
  const api = new Api();
  const response = await api.getFilterOptions(payload);
  console.log(response);
  return response.data;
};

const searchService = {
  fetchFeatures,
  fetchFiltersOptions,
};

export default searchService;
