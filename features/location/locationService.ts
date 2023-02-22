import Api from "../../api";


export const fetchMakes = async () => {
  const api = new Api();
  const response = await api.getMakes();
  console.log(response);

  return response.data;
};

const locationService = {
  fetchMakes,
};

export default locationService;
