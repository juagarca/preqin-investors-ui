import axios from "axios";

import { fetchInvestors } from ".";
import investors from "../../utils/tests/mocks/investors.json";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API Calls", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchInvestors", () => {
    it("should fetch investors successfully", async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: investors });

      const result = await fetchInvestors();

      expect(mockedAxios.get).toHaveBeenCalledWith(
        `${process.env.REACT_APP_API_URL}/api/investors`
      );
      expect(result).toEqual(investors);
    });

    it("should throw an error if the API call fails", async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error("Error"));

      await expect(fetchInvestors()).rejects.toThrow("Error");
    });
  });
});
