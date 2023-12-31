import axios from "axios";

/**
 * Fetches the exchange rate data for the past 30 days from an API.
 *
 * @async
 * @function
 * @returns {Promise<Array<Object>>} An array of objects containing the date and exchange rate data for EUR against USD.
 */
export let getData = async () => {
  // Get the current date
  let currentDate = new Date();

  // Get the date 30 days ago
  let thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  // Format the date as a string
  let formattedDate = thirtyDaysAgo.toISOString().slice(0, 10);
  let formattedEndDate = currentDate.toISOString().slice(0, 10);
  console.log("jkg");
  let { data } = await axios.get(
    `https://api.apilayer.com/exchangerates_data/timeseries?apikey=dzB2qlMArmsmjBjETDK0V3oQPCMdBBNk&start_date=${formattedDate}&end_date=${formattedEndDate}&symbols=EUR&base=USD`
  );
  let dataArr = [];

  if (data.success) {
    // dataArr = Object.values(data.rates);
    for (const item in data.rates) {
      const rate = data.rates[item].EUR;
      const obj = {
        date: item,
        rate,
      };
      dataArr.push(obj);
    }
    return dataArr;
  } else {
    console.log(data);
  }
};

/**
 * Fetches the current exchange rate data for EGP, GBP, and EUR against USD from an API.
 *
 * @async
 * @function
 * @returns {Promise<Array<Object>>} An array of objects containing the exchange rate data for EGP, GBP, and EUR against USD.
 */
export const getBarData = async () => {
  let { data } = await axios.get(
    `https://api.apilayer.com/exchangerates_data/latest?apikey=dzB2qlMArmsmjBjETDK0V3oQPCMdBBNk&symbols=EGP,GBP,EUR&base=USD`
  );
  if (data.success) {
    let dataArr = [];
    dataArr.push(data.rates);
    return dataArr;
  } else {
    console.log(data);
  }
};
