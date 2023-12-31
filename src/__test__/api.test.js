import { getData } from "../api/api.js";

test("should fetch exchange rate data for the past 30 days", async () => {
  const data = await getData();
  const mockData = {
    success: true,
    rates: {
      "2023-05-19": { EUR: 0.821 },
      "2023-05-20": { EUR: 0.822 },
      "2023-05-21": { EUR: 0.823 },
      "2023-05-22": { EUR: 0.824 },
      "2023-05-23": { EUR: 0.825 },
      "2023-05-24": { EUR: 0.826 },
      "2023-05-25": { EUR: 0.827 },
      "2023-05-26": { EUR: 0.828 },
      "2023-05-27": { EUR: 0.829 },
      "2023-05-28": { EUR: 0.83 },
      "2023-05-29": { EUR: 0.831 },
      "2023-05-30": { EUR: 0.832 },
      "2023-05-31": { EUR: 0.833 },
      "2023-06-01": { EUR: 0.834 },
      "2023-06-02": { EUR: 0.835 },
      "2023-06-03": { EUR: 0.836 },
      "2023-06-04": { EUR: 0.837 },
      "2023-06-05": { EUR: 0.838 },
      "2023-06-06": { EUR: 0.839 },
      "2023-06-07": { EUR: 0.84 },
      "2023-06-08": { EUR: 0.841 },
      "2023-06-09": { EUR: 0.842 },
      "2023-06-10": { EUR: 0.843 },
      "2023-06-11": { EUR: 0.844 },
      "2023-06-12": { EUR: 0.845 },
      "2023-06-13": { EUR: 0.846 },
      "2023-06-14": { EUR: 0.847 },
      "2023-06-15": { EUR: 0.848 },
      "2023-06-16": { EUR: 0.849 },
      "2023-06-17": { EUR: 0.85 },
      "2023-06-18": { EUR: 0.851 },
    },
  };
  expect(data).toBe(mockData);
});
