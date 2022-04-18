import axios from "axios";

const getAllFoods = async () => {
  return axios.get(`https://dev-api.mstars.mn/api/foods`);
};
export const foodServices = {
  getAllFoods,
};
