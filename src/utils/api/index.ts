import axios from "axios";

import { IInvestor } from "../../types";

const apiCall = async <Type>(path: string) => {
  const url = `${process.env.REACT_APP_API_URL}/${path}`;

  try {
    const response = await axios.get<Type>(url);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

const fetchInvestors = async () => {
  const path = `api/investors`;
  return apiCall<IInvestor[]>(path);
};

export { fetchInvestors };
