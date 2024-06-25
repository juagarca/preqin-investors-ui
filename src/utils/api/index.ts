import axios from "axios";

import { AssetClass, ICommitmentInfo, IInvestor } from "../../types";

const apiCall = async <Type>(path: string) => {
  const url = `${process.env.REACT_APP_API_URL}/${path}`;

  try {
    const response = await axios.get<Type>(url);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

const fetchCommitmentInfo = async (
  assetClass: AssetClass,
  investorId: string
) => {
  const path = `api/investor/commitment/${assetClass}/${investorId}`;
  return apiCall<ICommitmentInfo[]>(path);
};

const fetchInvestors = async () => {
  const path = `api/investors`;
  return apiCall<IInvestor[]>(path);
};

export { fetchCommitmentInfo, fetchInvestors };
